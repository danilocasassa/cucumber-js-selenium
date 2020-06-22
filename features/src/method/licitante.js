import { clickElement, typeInElement, clickBtnElement, getElementText, textExistsInScreen } from "./utils";
import common from "../pageObjects/common";
import assert from "assert";

export async function selecionarModalidadeLicitante() {
  await clickElement(common.garantirContratoPublico);
  await clickElement(common.modalidadeLicitante);
}

export async function preencherEditalLicitante(valorContrato, vigencia) {
  await typeInElement(common.valorContrato, valorContrato);
  await typeInElement(common.vigenciaContrato, vigencia);
  await clickBtnElement(common.avancarEditalInfo);
}

export async function validarDadosCotacaoLicitante(valorCotacao, nomeTomador, vigencia, valorIS) {
  assert.equal(await getElementText(common.valorCotacao), valorCotacao);
  assert.equal(await getElementText(common.vigenciaCotacao), vigencia);
  assert.equal(await textExistsInScreen("Licitante"), true);
  assert.equal(await textExistsInScreen(nomeTomador), true);
  assert.equal(await textExistsInScreen(valorIS), true);
}
