/* eslint-disable no-unused-vars */
import render from "./displayTodos.js";
import events from "./mediator.js";

const handleModal = (function () {
  // cache DOM
  const modal = document.getElementById("taskModal");
  const closeModal = document.querySelector(".close");
  const addBtn = document.getElementById("addBtn");
  const todoSubmit = document.getElementById("todoSubmit");
  const projectSubmit = document.getElementById("projectSubmit");
  const taskSelect = document.getElementById("taskSelect");
  const projectSelect = document.getElementById("projectSelect");
  const taskModal = document.getElementById("todoForm");
  const projectModal = document.getElementById("projectForm");

  // bind events
  addBtn.addEventListener("click", show);
  closeModal.addEventListener("click", hide);
  todoSubmit.addEventListener("click", addTodo);
  todoSubmit.addEventListener("click", hide);
  projectSubmit.addEventListener("click", addProject);
  projectSubmit.addEventListener("click", hide);

  window.addEventListener("click", (e) => {
    // if window is clicked on modal (not modal content) then close modal
    if (e.target == modal) {
      hide();
    }
  });

  taskSelect.addEventListener("click", function () {
    taskSelect.className = "selected";
    projectSelect.removeAttribute("class");
    projectModal.className = "modal-content";
    taskModal.className = "modal-content visible";
  });

  projectSelect.addEventListener("click", function () {
    projectSelect.className = "selected";
    taskSelect.removeAttribute("class");
    taskModal.className = "modal-content";
    projectModal.className = "modal-content visible";
  });

  function show() {
    modal.style.display = "block";
  }

  function hide() {
    modal.style.display = "none";
  }

  function addTodo() {
    const name = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = new Date(document.getElementById("dueDate").value);
    const priority = document.getElementById("priority").value;
    const project = document.getElementById("projectCat").value;
    events.publish("todoSubmitted", [
      name,
      description,
      dueDate,
      priority,
      project,
    ]);
  }

  function addProject() {
    const name = document.getElementById("projectTitle").value;
    const description = document.getElementById("projDesc").value;

    events.publish("projectSubmitted", [name, description]);
  }
})();
