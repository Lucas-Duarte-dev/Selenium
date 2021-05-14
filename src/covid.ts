import { Builder, By, Key, until } from 'selenium-webdriver';
import { platform } from 'os';
import getUrl from './utils/getUrl';

const driver = new Builder().forBrowser(platform() === 'linux' ? 'chrome' : 'firefox').build();

const covid = async () => {
  try {
    getUrl(driver, 'http://google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('Covid-19', Key.RETURN);
    await driver.wait(until.titleIs('Covid-19 - Google Search'), 1000);
    const tdValues = await driver.findElements(By.css('table tbody tr .dZdtsb'));
    let texts: string[] = [];

    for (let i = 0; i < tdValues.length; i++) {
      let values= await tdValues[i].getText();
      texts.push(values);
    }
    let dividerText = texts.map(element => element.replace(/(\r\n|\n|\r)/gm, ' '))
    let values = dividerText.map(element => element.replace(/[a-z|A-Z]/g, "").trim().split(' ')[1])
    let sp = {
      total_de_casos: values[0],
      recuperados: values[1],
      mortos: values[2],
    }
    let br = {
      total_de_casos: values[3],
      recuperados: values[4],
      mortos: values[5],
    }
    console.log({ sp, br })
  }
  finally {
    await driver.quit();

  }
}


export default covid
