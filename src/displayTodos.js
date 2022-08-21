/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// Module to manipulate DOM for todos
import events from "./mediator.js";
import { format } from "date-fns";

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
      element.appendChild(addCheckbox());

      for (const prop in item) {
        let component;
        switch (prop) {
          case "name":
            component = document.createElement("div");
            component.innerHTML = item[prop];
            element.appendChild(component);
            break;
          case "dueDate":
            component = document.createElement("div");
            component.innerHTML = format(item[prop], "PPP");
            element.appendChild(component);
            break;
          case "priority":
            element.style.backgroundColor = getPrioStyle(item[prop]);
          default:
            break;
        }
      }

      element.appendChild(addRemoveBtn());
      content.appendChild(element);
    }
  }

  function removeCard(e) {
    const removed = e.target.closest("div").id; // find name of todo chosen to remove
    events.publish("cardRemoved", removed); // published id/name of removed todo
  }

  function addCheckbox() {
    const component = document.createElement("input"); // When checked, changed class of card to completed --> cross out name and change color or card
    component.setAttribute("type", "checkbox");
    return component;
  }
  function addRemoveBtn() {
    const component = document.createElement("button");
    component.setAttribute("type", "button");
    component.innerHTML = "✖️";
    component.addEventListener("click", removeCard);
    return component;
  }

  function getPrioStyle(level) {
    switch (level.toLowerCase()) {
      case "low":
        return "#a8f0cb";
      case "medium":
        return "#feffc2";
      case "high":
        return "#ff7878";
    }
  }
})();
