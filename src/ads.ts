import { Builder, By, Key, until } from 'selenium-webdriver'
import { platform } from 'os'
import getUrl from './utils/getUrl'

const accessUniqsul = async () => {
  const driver = new Builder().forBrowser(platform() === 'linux' ? 'chrome' : 'firefox').build()
  try {
    getUrl(driver, 'http://google.com/ncr')
    await driver.findElement(By.name('q')).sendKeys('Cruzeiro do Sul', Key.RETURN)
    await driver.wait(until.titleIs('Cruzeiro do Sul - Google Search'), 1000)
    await driver.findElement(By.xpath("//a[@data-pcu='https://www.cruzeirodosulvirtual.com.br/']")).click()

    const classGraduation = driver.findElement(By.id('cardapio-mosaico0'))
    const getRoute = await classGraduation.getAttribute('href')

    await driver.get(getRoute)

    const getADS = await driver.findElements(By.className('curso-card-btn'))

    const getRouteADS = await getADS[6].getAttribute('href')
    getUrl(driver, getRouteADS)

    const text = await driver.findElement(By.className('scconteudo-texto-principal geral-conteudolista short-mobile')).getText()
    console.log(text)
  } finally {
    driver.quit()
  }
}

export default accessUniqsul
