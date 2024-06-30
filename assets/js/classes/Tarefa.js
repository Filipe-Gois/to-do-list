export class Tarefa {
  constructor(nome, descricao, data) {
    this.nome = nome;
    this.descricao = descricao;
    this.data = data;
    this.favoritada = false;
  }
  favoritar() {
    this.favoritada = true;
  }
  desfavoritar() {
    this.favoritada = false;
  }
}
