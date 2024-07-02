"use strict";
//<div class="tarefas-box">
// <!-- adicionados via js -->
//HTML

import { Tarefa } from "./classes/Tarefa.js";
import Api from "./utils/api.js";

let arrayTarefas = [];

const putMethod = `PUT`;
const getMethod = `GET`;
const postMethod = `POST`;
const deleteMethod = `DELETE`;
let optionsRequisicaoBase = {
  method: getMethod,
  headers: {
    "Content-Type": "application/json",
  },
};
const svgNamespace = "http://www.w3.org/2000/svg";
const svgEstrela =
  "M9.79541 2.08281L11.1154 4.74456C11.2954 5.11506 11.7754 5.47056 12.1804 5.53806L14.5722 5.93931C16.1022 6.19656 16.4622 7.31556 15.3597 8.41956L13.4997 10.2946C13.1847 10.6118 13.0122 11.2246 13.1097 11.6633L13.6422 13.9846C14.0622 15.8221 13.0947 16.5323 11.4822 15.5723L9.23966 14.2336C8.83466 13.9921 8.16716 13.9921 7.75466 14.2336L5.51366 15.5723C3.90866 16.5323 2.93366 15.8138 3.35366 13.9846L3.88616 11.6633C3.98366 11.2246 3.81116 10.6118 3.49616 10.2946L1.63616 8.41956C0.541913 7.31481 0.894413 6.19656 2.42366 5.93931L4.81616 5.53806C5.21366 5.47056 5.69366 5.11506 5.87366 4.74456L7.19366 2.08281C7.91366 0.639063 9.08291 0.639063 9.79541 2.08281Z";

const fadeDiv = document.querySelector("#fade");
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".btn-abrir-modal");
const filtroSelecionadoClasse = "filtro-selecionado";
const filtrosItens = [...document.querySelectorAll(".filtro-conteudo")];
const tarefasBox = document.querySelector(".tarefas-box");

//modal
let inputNomeTarefaModal = document.querySelector("#modal-input--nome");
let inputDataTarefaModal = document.querySelector("#modal-input--data");
let inputDescricaoTarefaModal = document.querySelector(
  ".modal-input--descricao"
);

const formTarefa = document.querySelector("#form-tarefa");
//pega o primeiro elemento filho

const btnAdicionarOuAtualizarTarefa = document.querySelector("#btn-atualizar");
const btnExcluirTarefa = document.querySelector("#btn-excluir");

//lógica para alterar tema
document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.querySelector(".my-body");

  themeSwitcher.addEventListener("change", (e) => {
    document.body.classList.toggle("light-theme");
  });
});

formTarefa.addEventListener("submit", (e) => {
  e.preventDefault();
  cadastrarTarefa();
});

//lógica para alterar filtro de tarefas
filtrosItens.map((filtro) => {
  filtro.addEventListener("click", (e) => {
    filtrosItens.map((item) => item.classList.remove(filtroSelecionadoClasse));

    filtro.classList.add(filtroSelecionadoClasse);
  });
});

//lógica para abrir e fechar modal
const toggleModal = () =>
  [modal, fadeDiv].map((e) => {
    e.classList.toggle("hide");
  });

[openModal, fadeDiv].map((el) =>
  el.addEventListener("click", () => {
    toggleModal();
    limparCampos();
  })
);

openModal.addEventListener("click", () => {
  btnExcluirTarefa.classList.add("hide-btn");
  btnAdicionarOuAtualizarTarefa.innerHTML = "Cadastrar Tarefa";
});

const limparCampos = () => {
  inputNomeTarefaModal.value = "";
  inputDataTarefaModal.value = "";
  inputDescricaoTarefaModal.value = "";
};

//----Requisições de api----

const optionsRequisicao = (dados = {}, method = "POST") => {
  return { ...optionsRequisicaoBase, method, body: JSON.stringify(dados) };
};

const chamarApi = async (id = undefined, dados = {}, method) => {
  try {
    let response = [];
    switch (method) {
      case postMethod:
        await fetch(Api, optionsRequisicao(dados, method));
        break;

      case putMethod:
      case deleteMethod:
        await fetch(`${Api}/${id}`, optionsRequisicao(dados, method));

        break;

      default:
        response = await fetch(Api, optionsRequisicaoBase);

        return response;
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

const cadastrarTarefa = async () => {
  try {
    let nomeTarefa = inputNomeTarefaModal.value;
    let descricaoTarefa = inputDescricaoTarefaModal.value;
    let dataTarefa = inputDataTarefaModal.value;
    const novaTarefa = new Tarefa(nomeTarefa, descricaoTarefa, dataTarefa);

    alert("sucesso");

    chamarApi(novaTarefa.id, novaTarefa, postMethod);
    limparCampos();
  } catch (error) {
    alert("erro");
    console.log(error);
  }
};

const excluirTarefa = async (id) => {
  try {
    chamarApi(id, {}, deleteMethod);
    limparCampos();
    alert("sucesso");
  } catch (error) {
    console.log(error);
  }
};

const atualizarTarefa = async (id, dados) => {
  try {
    await chamarApi(id, dados, putMethod);
    limparCampos();
    alert("Sucesso!");
  } catch (error) {
    console.log(error);
  }
};

const anexarTarefasAoHtml = () => {
  arrayTarefas.map((e) => {
    let tarefa = new Tarefa(e._nome, e._descricao, e._data);
    tarefa.id = e.id;
    tarefa._completa = e._completa;
    tarefa._favoritada = e._favoritada;

    // tarefa-content-box
    const tarefasContentBox = document.createElement("div");
    tarefasContentBox.setAttribute("class", "tarefa-content-box");

    // tarefa-content
    const tarefaContent = document.createElement("label");
    tarefaContent.setAttribute("class", "tarefa-content");
    tarefaContent.setAttribute("for", "");

    // input tarefa
    const inputTarefa = document.createElement("input");
    inputTarefa.setAttribute("type", "checkbox");
    if (tarefa.completa) {
      inputTarefa.setAttribute("checked", "checked");
    }
    inputTarefa.setAttribute("id", "tarefa");

    // paragrafo com o nome da tarefa
    const nomeTarefa = document.createElement("p");
    nomeTarefa.setAttribute(
      "class",
      `texto ${tarefa.completa && "tarefa-concluida"}` //adiciona a classe "tarefa-concluida" caso a tarefa seja concluida
    );
    nomeTarefa.innerHTML = tarefa.nome;

    // favoritar-tarefa-content
    const favoritarTarefaContent = document.createElement("div");
    favoritarTarefaContent.setAttribute("class", "favoritar-tarefa-content");

    // tarefa-favoritada
    const tarefaFavoritada = document.createElementNS(svgNamespace, "svg");
    tarefaFavoritada.setAttribute(
      "class",
      `${tarefa.favoritada && "tarefa-favoritada"}`
    );
    tarefaFavoritada.setAttribute("width", "17");
    tarefaFavoritada.setAttribute("height", "17");
    tarefaFavoritada.setAttribute("viewBox", "0 0 17 17");
    tarefaFavoritada.setAttribute("xmlns", svgNamespace);

    // path-svg
    const pathSvg = document.createElementNS(svgNamespace, "path");
    pathSvg.setAttribute("d", svgEstrela);
    pathSvg.setAttribute("stroke-width", "1.5");
    pathSvg.setAttribute("stroke-linecap", "round");
    pathSvg.setAttribute("stroke-linejoin", "round");

    // div add label
    tarefasContentBox.appendChild(tarefaContent);

    // label add input e nome
    tarefaContent.appendChild(inputTarefa);
    tarefaContent.appendChild(nomeTarefa);

    // div add div de favoritos
    tarefasContentBox.appendChild(favoritarTarefaContent);

    // div favoritos add svg
    favoritarTarefaContent.appendChild(tarefaFavoritada);

    // svg add path
    tarefaFavoritada.appendChild(pathSvg);

    tarefasBox.appendChild(tarefasContentBox);

    //funcionalidades ----

    //exibe os detalhes da tarefa e os método de atualizar e excluir tarefa
    tarefasContentBox.addEventListener("click", () => {
      toggleModal();
      inputNomeTarefaModal.value = tarefa.nome;
      inputDataTarefaModal.value = tarefa.data;
      inputDescricaoTarefaModal.value = tarefa.descricao;

      btnExcluirTarefa.addEventListener("click", (evento) => {
        evento.preventDefault();
        excluirTarefa(tarefa.id);
      });

      btnAdicionarOuAtualizarTarefa.innerHTML = "Atualizar Tarefa";
      btnExcluirTarefa.classList.remove("hide-btn");
      btnAdicionarOuAtualizarTarefa.addEventListener("click", (evento) => {
        evento.preventDefault();
        // if (btnExcluirTarefa.classList.contains("hide-btn")) {
        //   cadastrarTarefa();
        // } else {
        tarefa.nome = inputNomeTarefaModal.value;
        tarefa.descricao = inputDescricaoTarefaModal.value;
        tarefa.data = inputDataTarefaModal.value;
        atualizarTarefa(tarefa.id, tarefa);
        // }
      });
    });

    //marca ou desmarca a tarefa como favorita
    tarefaFavoritada.addEventListener("click", async (evento) => {
      evento.preventDefault();
      evento.stopPropagation();
      try {
        tarefa.favoritarDesfavoritar();
        //faz a requisição
        chamarApi(tarefa.id, tarefa, putMethod);
      } catch (error) {
        console.log(error);
      }
    });

    //altera o status da tarefa "completa/incompleta"
    inputTarefa.addEventListener("click", async (evento) => {
      evento.preventDefault();
      evento.stopPropagation();
      try {
        //completa ou descompleta a tareda atraves do metodo da classe
        tarefa.completarDescompletar();

        chamarApi(tarefa.id, tarefa, putMethod);
      } catch (error) {
        console.log(error);
      }
    });
  });
};

const renderizarTarefas = async () => {
  try {
    const response = await chamarApi();

    if (!response.ok) {
      alert("Erro ao buscar tarefas!");
      return;
    }
    arrayTarefas = await response.json();

    anexarTarefasAoHtml();
  } catch (error) {
    alert("Erro ao buscar tarefas!");
  }
};

//-----------funcionalidades do modal----------

//----------chamada de funções----------
renderizarTarefas();
