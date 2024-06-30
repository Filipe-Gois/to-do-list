"use strict";
//<div class="tarefas-box">
// <!-- adicionados via js -->
//HTML

document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.querySelector(".my-body");

  themeSwitcher.addEventListener("change", (e) => {
    document.body.classList.toggle("light-theme");
    console.log(document.body.classList);
  });
});
