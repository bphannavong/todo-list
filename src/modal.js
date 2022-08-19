/* eslint-disable no-unused-vars */
import render from "./displayTodos.js";
import events from "./mediator.js";

const handleModal = (function () {
  // cache DOM
  const modal = document.getElementById("taskModal");
  const closeModal = document.querySelector(".close");
  const addBtn = document.getElementById("addBtn");
  const submitBtn = document.getElementById("submitBtn");
  const taskSelect = document.querySelector(".modal-content>div:first-of-type");
  const projectSelect = document.querySelector(
    ".modal-content>div:nth-of-type(2)"
  );

  // bind events
  addBtn.addEventListener("click", show);
  closeModal.addEventListener("click", hide);
  submitBtn.addEventListener("click", getValues);
  submitBtn.addEventListener("click", hide);

  window.addEventListener("click", (e) => {
    // if window is clicked on modal (not modal content) then close modal
    if (e.target == modal) {
      hide();
    }
  });

  taskSelect.addEventListener("click", function (e) {
    e.target.style.color = "red";
  });
  function show() {
    modal.style.display = "block";
  }

  function hide() {
    modal.style.display = "none";
  }

  function getValues() {
    const name = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = new Date(document.getElementById("dueDate").value);
    const priority = document.getElementById("priority").value;
    // const values = values...
    // publish values => to pub
    events.publish("formSubmitted", [name, description, dueDate, priority]);
  }
})();
