import selenium from "../config/selenium/selenium";
import { When, Then, After, Before, setDefaultTimeout, AfterAll, Given } from "cucumber";
import { setDriverUtils, goToPage, textExistsInScreen, waitElement, clickElement } from "../src/method/utils";
import {
  selecionarModalidadeLicitante,
  preencherEditalLicitante,
  validarDadosCotacaoLicitante,
} from "../src/method/licitante";
import { informarTomadorTomador, qualificarCotacao, esperarTelaCotacao } from "../src/method/common";

Before(async function () {
  setDefaultTimeout(60 * 1000);
  await selenium.tearUp();
  await setDriverUtils();
});

Given("que acesso a plataforma no fluxo de licitante", async function () {
  await goToPage("https://digital-qas.juntoseguros.com/");
  await selecionarModalidadeLicitante();
});

Given("seleciono qualquer tomador", async function () {
  await informarTomadorTomador();
});

When("gero uma cotação qualquer", async function () {
  await preencherEditalLicitante("1,00", "10");
});

When("gero uma cotação com os seguintes dados:", async function (dataTable) {
  let valores = dataTable.hashes();
  let valorContrato, vigencia;

  for (let i = 0; i < valores.length; i++) {
    switch (valores[i].coluna) {
      case "valor do Contrato":
        valorContrato = valores[i].valor;
        break;
      case "vigencia do Contrato":
        vigencia = valores[i].valor;
        break;
      default:
        throw new Error("Deu ruim chapa!! verifica a tabelinha ai!");
    }
  }

  await preencherEditalLicitante(valorContrato, vigencia);
});

When("seleciono qualquer opção de qualificação", async function () {
  await qualificarCotacao();
});

Then("vejo o resultado da cotação", async function () {
  await esperarTelaCotacao();
});

Then("vejo o resultado da cotação com os seguintes dados:", async function (dataTable) {
  let resultadosEsperados = dataTable.hashes();
  let valorCotacao, valorIS, nomeTomador, vigencia;

  for (let i = 0; i < resultadosEsperados.length; i++) {
    switch (resultadosEsperados[i].coluna) {
      case "valor da cotação":
        valorCotacao = resultadosEsperados[i].valor;
        break;
      case "valor de IS":
        valorIS = resultadosEsperados[i].valor;
        break;
      case "vigencia da cotacao":
        vigencia = resultadosEsperados[i].valor;
        break;
      case "nome tomador":
        nomeTomador = resultadosEsperados[i].valor;
        break;
      default:
        throw new Error("Deu ruim chapa!! verifica a tabelinha ai!");
    }
  }

  await validarDadosCotacaoLicitante(valorCotacao, nomeTomador, vigencia, valorIS);
});

After(async function () {
  await selenium.tearDown();
});
