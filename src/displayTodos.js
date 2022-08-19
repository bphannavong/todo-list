/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// Module to manipulate DOM for todos
import events from "./mediator.js";

const displayTodos = (() => {
  // Cache DOM
  const content = document.getElementById("todos");

  // Bind Events
  events.subscribe("tasksUpdated", displayCards);

  function displayCards(todoArr) {
    content.innerHTML = "";
    if (!todoArr) {
      return;
    }
    for (const item of todoArr) {
      const element = document.createElement("div");
      element.setAttribute("id", item.name);
      element.classList.add("card");

      const completed = document.createElement("input"); // When checked, changed class of card to completed --> cross out name and change color or card
      completed.setAttribute("type", "checkbox");
      element.appendChild(completed);

      for (const prop in item) {
        const component = document.createElement("div");
        component.innerHTML = item[prop];
        element.appendChild(component);
      }

      const removeBtn = document.createElement("button");
      removeBtn.setAttribute("type", "button");
      removeBtn.innerHTML = "del";
      removeBtn.addEventListener("click", removeCard);
      element.appendChild(removeBtn);
      content.appendChild(element);
    }
  }

  function removeCard(e) {
    const removed = e.target.closest("div").id; // find name of todo chosen to remove
    events.publish("cardRemoved", removed); // published id/name of removed todo
  }
})();
