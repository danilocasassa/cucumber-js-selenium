import { typeInElement, clickBtnElement, waitElement, clickElement } from "./utils";
import common from "../pageObjects/common";

export async function informarTomadorTomador() {
  await typeInElement(common.cnpjTomador, "03541337000102");
  await clickBtnElement(common.avancarCNPJTomador);
}

export async function qualificarCotacao() {
  await clickElement(common.qualificar3dias);
}

export async function esperarTelaCotacao() {
  await waitElement(common.valorCotacao);
}
