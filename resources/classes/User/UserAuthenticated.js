export default class UserAuthenticated {
  constructor(nome, email, idade, peso, altura, exercises = []) {
    this.email = email;
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

  setExercises(exercises) {
    this.exercises = exercises;
  }
}
