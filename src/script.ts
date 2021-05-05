import { Builder, By, Key, until } from 'selenium-webdriver';


(async function exemple() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://google.com/');

  } finally {

  }
})()
