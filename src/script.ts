import { Builder, By, Key, until } from 'selenium-webdriver';

(async function accessUniqsul() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('Cruzeiro do Sul', Key.RETURN);
    await driver.wait(until.titleIs('Cruzeiro do Sul - Google Search'), 1000);
    await driver.findElement(By.xpath("//a[@data-pcu='https://www.cruzeirodosulvirtual.com.br/']")).click();

  } finally {
    await driver.quit()
  }
})()
