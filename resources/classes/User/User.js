export default class User {
  constructor(nome, email, idade, senha, peso, altura, exercises = []) {
    this.email = email;
    this.senha = senha;
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.exercises = exercises;
  }

  getUser() {
    return {
      nome: this.nome,
      email: this.email,
      idade: this.idade,
      peso: this.peso,
      altura: this.altura,
      exercises: this.exercises,
    };
  }

  getEmail() {
    return this.email;
  }

  getSenha() {
    return this.senha;
  }

  getNome() {
    return this.nome;
  }

  getPeso() {
    return this.peso;
  }
  getAltura() {
    return this.altura;
  }

  getExercises() {
    return this.exercises;
  }
}
