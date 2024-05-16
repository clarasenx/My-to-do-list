const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");

function addTask() {
  if (input.value !== "") {
    const novaLi = document.createElement("li");

    const removerBotao = document.createElement("button");
    removerBotao.textContent = "Remover!";
    removerBotao.onclick = function () {
      ul.removeChild(novaLi);
    };
    const tarefa = document.createElement("p");
    tarefa.className = "tarefa";
    tarefa.textContent = input.value;
    input.value = "";
    novaLi.appendChild(tarefa);
    novaLi.appendChild(removerBotao);
    ul.appendChild(novaLi);
  } else {
    alert("Por favor, insira uma tarefa!");
  }
}
