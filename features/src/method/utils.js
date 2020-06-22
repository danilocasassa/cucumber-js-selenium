import { By, until, Key } from "selenium-webdriver";
import selenium from "../../config/selenium/selenium";

let driver;

export async function setDriverUtils() {
  driver = await selenium.getDriver();
}

export async function goToPage(url) {
  await driver.get(url);
}

export async function getElementBy(locator, wait = true) {
  if (wait) await waitElement(locator);
  return await driver.findElement(locator);
}

export async function clickElement(locator) {
  const element = await getElementBy(locator);

  await element.click();
}

export async function clickBtnElement(locator) {
  await waitElementBeEnabled(locator);
  await clickElement(locator);
}

export async function waitElementBeEnabled(locator, timeout = Number(process.env.TIMEOUT)) {
  let el = await getElementBy(locator);
  await driver.wait(until.elementIsEnabled(el), timeout);
}

export async function elementIsVisible(locator) {
  const element = await getElementBy(locator);
  return await element.isDisplayed();
}

export async function typeInElement(locator, text) {
  const element = await getElementBy(locator);
  await element.sendKeys(text);
}

export async function clearTextElement(locator) {
  const element = await getElementBy(locator);
  await element.sendKeys(Key.CONTROL + "a");
  await element.sendKeys(Key.BACK_SPACE);
}

export async function waitElement(locator, timeout = Number(process.env.TIMEOUT)) {
  await driver.wait(until.elementLocated(locator, timeout));
}

export async function waitElementContains(textContains, timeout = Number(process.env.TIMEOUT)) {
  await driver.wait(until.elementLocated(By.xpath(`//*[contains(text(), '${textContains}')]`), timeout));
}

export async function waitElementVisible(locator, timeout = Number(process.env.TIMEOUT)) {
  await waitElement(locator);
  await driver.wait(until.elementIsVisible(driver.findElement(locator), timeout));
}

export async function waitElementVisibleContains(text, timeout = Number(process.env.TIMEOUT)) {
  await driver.wait(until.elementIsVisible(driver.findElement(By.xpath(`//*[contains(text(), "${text}")]`), timeout)));
}

export async function waitElementIsNotVisble(locator, timeout = Number(process.env.TIMEOUT)) {
  await driver.wait(until.elementIsNotVisible(driver.findElement(locator), timeout));
}

export const elementIsEnable = async (locator) => {
  const element = await getElementBy(locator);
  return await element.isEnabled();
};

export const getElementText = async (locator) => {
  await waitElementVisible(locator);
  const element = await getElementBy(locator);
  return await element.getText();
};

export const getElementAttribute = async (locator, attribute) => {
  const element = await getElementBy(locator);
  return await element.getAttribute(attribute);
};

export const textExistsInScreen = async (text) => {
  let bodyText = await getElementText(By.xpath("//body"));

  if (bodyText.search(text) == -1) return false;
  else return true;
};

export async function waitTimeExplicit(time) {
  await driver.sleep(time);
}

export async function returnBackPage() {
  await driver.navigate().back();
}
