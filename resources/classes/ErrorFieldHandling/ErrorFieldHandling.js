const { Alert } = require("react-native");

export default class ErrorFieldHandling {
  static verifyBlankFields({
    nome,
    idade,
    altura,
    peso,
    email,
    senha,
    confirmPassword,
  }) {
    if (nome.length === 0) throw new Error("Preencha seu nome.");
    if (idade.length === 0) throw new Error("Preencha sua idade.");
    if (altura.length === 0) throw new Error("Preencha sua altura.");
    if (peso.length === 0) throw new Error("Preencha seu peso.");
    if (email.length === 0) throw new Error("Preencha seu email.");
    if (senha.length === 0) throw new Error("Preencha sua senha.");
    if (senha != confirmPassword) throw new Error("Senhas não conferem.");

    return true;
  }
}
