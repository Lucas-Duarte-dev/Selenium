import { Builder, By, Key, until } from 'selenium-webdriver';

(async function accessUniqsul(): Promise<string> {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('Cruzeiro do Sul', Key.RETURN);
    await driver.wait(until.titleIs('Cruzeiro do Sul - Google Search'), 1000);
    await driver.findElement(By.xpath("//a[@data-pcu='https://www.cruzeirodosulvirtual.com.br/']")).click();

    const classGraduation = await driver.findElement(By.id('cardapio-mosaico0'));
    const getRoute = await classGraduation.getAttribute('href');

    await driver.get(getRoute);

    const getADS = await driver.findElements(By.className('curso-card-btn'));
    const searchCourse = getADS.map(element => element);
    const getRouteADS = await searchCourse[6].getAttribute('href');
    await driver.get(getRouteADS);

    const text = await driver.findElement(By.className('scconteudo-texto-principal geral-conteudolista short-mobile')).getText();

    console.log(text)

    return text;

  } finally {
    await driver.quit()
  }
})()
