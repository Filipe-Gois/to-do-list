export class Tarefa {
  constructor(nome, descricao, data) {
    if (
      typeof nome !== "string" ||
      typeof descricao !== "string" ||
      !(data instanceof Date)
    ) {
      throw new Error("Parâmetros inválidos para a criação de Tarefa.");
    }

    this._nome = nome;
    this._descricao = descricao;
    this._data = data;
    this._favoritada = false;
    this._completa = false;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    if (typeof novoNome !== "string") {
      throw new Error("Nome deve ser uma string.");
    }
    this._nome = novoNome;
  }

  get descricao() {
    return this._descricao;
  }

  set descricao(novaDescricao) {
    if (typeof novaDescricao !== "string") {
      throw new Error("Descrição deve ser uma string.");
    }
    this._descricao = novaDescricao;
  }

  get data() {
    return this._data;
  }

  set data(novaData) {
    if (!(novaData instanceof Date)) {
      throw new Error("Data deve ser uma instância de Date.");
    }
    this._data = novaData;
  }

  get favoritada() {
    return this._favoritada;
  }

  set favoritada(valor) {
    if (typeof valor !== "boolean") {
      throw new Error("O valor de favoritada deve ser um booleano.");
    }
    this._favoritada = valor;
  }

  get completa() {
    return this._completa;
  }

  set completa(valor) {
    if (typeof valor !== "boolean") {
      throw new Error("O valor de completa deve ser um booleano.");
    }
    this._completa = valor;
  }

  favoritarDesfavoritar() {
    this._favoritada = !this._favoritada;
  }

  completarDescompletar() {
    this._completa = !this._completa;
  }
}
