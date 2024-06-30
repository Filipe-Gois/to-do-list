"use strict";
//<div class="tarefas-box">
// <!-- adicionados via js -->
//HTML

import { Tarefa } from "./classes/Tarefa.js";

const urlApi = ``;

const fadeDiv = document.querySelector("#fade");
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".btn-abrir-modal");
const filtroSelecionadoClasse = "filtro-selecionado";
const filtrosItens = [...document.querySelectorAll(".filtro-conteudo")];

const toggleModal = () =>
  [modal, fadeDiv].map((e) => e.classList.toggle("hide"));

[openModal, fadeDiv].map((el) =>
  el.addEventListener("click", () => toggleModal())
);

//lógica para alterar filtro de tarefas
filtrosItens.map((filtro) => {
  filtro.addEventListener("click", (e) => {
    filtrosItens.map((item) => item.classList.remove(filtroSelecionadoClasse));

    filtro.classList.add(filtroSelecionadoClasse);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.querySelector(".my-body");

  themeSwitcher.addEventListener("change", (e) => {
    document.body.classList.toggle("light-theme");
  });
});

const adicionarTarefa = async () => {
  try {
    // const novaTarefa = new Tarefa();
    // await fetch(urlApi, { method: "POST", body: novaTarefa });
  } catch (error) {
    console.log(error);
  }
};

const t1 = new Tarefa("sla", "sakjhdasd", new Date());
console.log(t1.set);
