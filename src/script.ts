import { Builder, By, Key, until } from 'selenium-webdriver';

import { platform } from 'os';

const driver = new Builder().forBrowser(platform() === 'linux' ? 'chrome' : 'firefox').build();

const getUrl = (url: string): Promise<void> => {
  return driver.get(`${url}`)
}

(async function accessUniqsul(): Promise<string> {

  try {
    await getUrl('http://google.com/ncr');
    driver.findElement(By.name('q')).sendKeys('Cruzeiro do Sul', Key.RETURN);
    await driver.wait(until.titleIs('Cruzeiro do Sul - Google Search'), 1000);
    await driver.findElement(By.xpath("//a[@data-pcu='https://www.cruzeirodosulvirtual.com.br/']")).click();

    const classGraduation = driver.findElement(By.id('cardapio-mosaico0'));
    const getRoute = await classGraduation.getAttribute('href');

    await driver.get(getRoute);

    const getADS = await driver.findElements(By.className('curso-card-btn'));
    const searchCourse = getADS.map(element => element);
    const getRouteADS = await searchCourse[6].getAttribute('href');
    await getUrl(getRouteADS);

    const text = await driver.findElement(By.className('scconteudo-texto-principal geral-conteudolista short-mobile')).getText();

    return text;

  } finally {
    await driver.quit()
  }
})()
