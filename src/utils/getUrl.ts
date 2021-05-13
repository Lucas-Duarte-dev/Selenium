import {  ThenableWebDriver } from 'selenium-webdriver';

const getUrl = async (driver: ThenableWebDriver ,url: string): Promise<void> => {
  return await driver.get(`${url}`)
}
export default getUrl
