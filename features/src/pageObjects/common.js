import { By } from "selenium-webdriver";

const garantirContratoPublico = By.xpath('//*[@data-cy="Garantir um contrato público ou licitação"]');
const modalidadeLicitante = By.xpath('//*[@data-cy="Preciso da garantia apenas para participar da licitação"]');
const cnpjTomador = By.name("FederalId");
const avancarCNPJTomador = By.xpath('//*[@data-cy="AvancarPolicyHolder"]');
const valorContrato = By.name("contract-value");
const vigenciaContrato = By.name("vigencia");
const avancarEditalInfo = By.xpath('//*[@data-cy="AvancarInfoEdital"]');
const qualificar3dias = By.xpath('//*[@data-testid="Em até 3 dias"]');
const valorCotacao = By.xpath('//*[@data-testid="quote-primary-price"]');
const vigenciaCotacao = By.xpath('//*[@data-cy="vigenciaSeguro"]');

export default {
  garantirContratoPublico,
  modalidadeLicitante,
  cnpjTomador,
  avancarCNPJTomador,
  valorContrato,
  vigenciaContrato,
  avancarEditalInfo,
  qualificar3dias,
  valorCotacao,
  vigenciaCotacao,
};
