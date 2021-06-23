const cpf = "705.484.450.53";
let fator = 11;

const limparString = (string, regra = "") => {
  return string.replace(regra, "");
};

const limparCpf = (cpf) => {
  return limparString(cpf, /\D+/g);
};

const transformarStringEmArray = (string) => {
  return Array.from(string);
};

const transformarCpfEmArray = (cpf) => {
  return transformarStringEmArray(cpf);
};

const novePrimeirosDigitos = (cpf) => {
  return transformarCpfEmArray(limparCpf(cpf)).slice(0, -2);
};

const multiplicarArray = (array, multiplicador) => {
  return array.map((arrayNum) => arrayNum * (multiplicador -= 1));
};

const multiplicarCpfArray = (cpfArr, fator) => {
  return multiplicarArray(cpfArr, fator);
};

const somarArray = (array) => {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

const retornaNoveCpfSomado = (cpf) => {
  return somarArray(multiplicarCpfArray(novePrimeirosDigitos(cpf), fator));
};

const pegarDoisUltimosNumeros = (arr) => {
  return arr.slice(-2);
};

const doisUltimosDigitos = (cpf) => {
  return pegarDoisUltimosNumeros(cpf);
};

const contaNumerosFinais = (valor) => {
  const n = 11 - (valor % 11);
  if (n > 9) return 0;
  return n;
};

const dezPrimeirosDigitos = (cpf) => {
  return transformarCpfEmArray(limparCpf(cpf)).slice(0, -1);
};

const retornaDezSomado = (cpf) => {
  return somarArray(multiplicarCpfArray(dezPrimeirosDigitos(cpf), fator + 1));
};

const getPrimeiroNumeroComProva = (cpf) => {
  return contaNumerosFinais(retornaNoveCpfSomado(cpf));
};

const getSegundoNumeroComProva = (cpf) => {
  return contaNumerosFinais(retornaDezSomado(cpf));
};

const primeiroNumero = getPrimeiroNumeroComProva(cpf).toString();
const segundoNumero = getSegundoNumeroComProva(cpf).toString();

const cpfValidator = (cpf) => {
  if (primeiroNumero + segundoNumero === doisUltimosDigitos(cpf)) {
    return true;
  }
  return false;
};

console.log(cpfValidator(cpf));