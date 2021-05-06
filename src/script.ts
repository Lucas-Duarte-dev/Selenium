import { Builder, By, Key, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome'



(async function exemple() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://google.com/');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
  } finally {
    await driver.quit()
  }
})()
