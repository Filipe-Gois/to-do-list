export class Tarefa {
  constructor(nome, descricao, data) {
    if (
      typeof nome !== "string" ||
      typeof descricao !== "string" ||
      !(data instanceof Date)
    ) {
      throw new Error("Parâmetros inválidos para a criação de Tarefa.");
    }

    this.nome = nome;
    this.descricao = descricao;
    this.data = data;
    this.favoritada = false;
    this.completa = false;
  }
  favoritarDesfavoritar() {
    this.favoritada = !this.favoritada;
  }

  completarDescompletar() {
    this.completa = !this.completa;
  }
}
