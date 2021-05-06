import { Builder, By, Key, until } from 'selenium-webdriver';

(async function exemple() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    await driver.get('http://google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('TORANJA', Key.RETURN);
    await driver.wait(until.titleIs('TORANJA - Google Search'), 1000);
  } finally {
  }
})()
