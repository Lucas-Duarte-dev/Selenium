import { Builder, By, Key, until } from 'selenium-webdriver';
import { platform } from 'os';
import getUrl from './utils/getUrl';
import { percents } from './utils/percents';

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

    let valuesForCalculated = values.map(element => element.replace(/[,|.]/g, ''));

    const recovery_percentage_BR = percents(Number(valuesForCalculated[3]), Number(valuesForCalculated[4]));
    const recovery_percentage_SP = percents(Number(valuesForCalculated[0]), Number(valuesForCalculated[1]));

    let sp = {
      total_de_casos: values[0],
      recuperados: values[1],
      mortos: values[2],
      porcentagem_recuperados_SP: recovery_percentage_SP
    }

    let br = {
      total_de_casos: values[3],
      recuperados: values[4],
      mortos: values[5],
      porcentagem_recuperados_BR: recovery_percentage_BR
    }

    console.log({ sp, br })
  }
  finally {
    await driver.quit();
  }
}


export default covid
