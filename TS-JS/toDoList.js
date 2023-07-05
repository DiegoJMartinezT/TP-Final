function agregarTarea() {
    var taskInput = document.getElementById("inputTask");

    var taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Ingrese una tarea válida.");
        return;
    }

    var listItem = document.createElement("li");
    listItem.setAttribute("id", "task-");
    listItem.classList.add("task");
    listItem.classList.add("new");
    listItem.innerHTML = `<span class="task-text">${taskText}</span>
                          <select class="task-status">
                              <option value="new">Nueva</option>
                              <option value="completed">Completada</option>
                          </select>
                          <button id="delete" class="btnEliminar" onclick="eliminar(event)">X</button>`;

    document.getElementById("list-conteiner").appendChild(listItem);
    taskInput.value = "";
}

function changeStatus(event) {
    var taskItem = event.target.parentNode;
    var taskStatus = event.target.value;
    taskItem.classList.remove("new", "completed");
    taskItem.classList.add(taskStatus);
}

function eliminar(event) {
    event.target.parentNode.remove()
}

document.getElementById("add-task").addEventListener("click", agregarTarea);

document.getElementById("list-conteiner").addEventListener("change", changeStatus);