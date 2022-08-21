/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
import events from "./mediator.js";
import { isSameDay, addDays, differenceInDays } from "date-fns";

const todo = (function () {
  // task array with all todos
  let tasks = [];
  let projects = [];

  // bind events
  events.subscribe("todoSubmitted", addTodo);
  events.subscribe("cardRemoved", removeTodo);
  events.subscribe("filterChosen", filterTasks);
  events.subscribe("projectSubmitted", addProject);
  window.addEventListener("DOMContentLoaded", () => {
    events.publish("tasksUpdated", tasks);
  });
  window.addEventListener("DOMContentLoaded", () => {
    events.publish("projectsUpdated", projects);
  });

  // Todo factory function
  const Todo = ([name, description, dueDate, priority, project]) => ({
    name,
    description,
    dueDate,
    priority,
    project,
  });

  const Project = ([name, description]) => ({
    name,
    description,
  });

  tasks = [
    Todo([
      "To do List",
      "Project for TOP",
      addDays(new Date(), 5),
      "low",
      "Example Project",
    ]),
    Todo(["Study TOP", "details", new Date(), "medium"]),
    Todo(["Take out the trash", "wnotes", addDays(new Date(), 10), "high"]),
  ];

  // Sub to modal values ==> push todo to list
  function addTodo(newValues) {
    tasks.push(Todo(newValues));
    events.publish("tasksUpdated", tasks);
  }

  function removeTodo(todoName) {
    tasks = tasks.filter((item) => item.name !== todoName);
    events.publish("tasksUpdated", tasks);
  }

  function addProject(newValues) {
    projects.push(Project(newValues));
    events.publish("projectsUpdated", projects);
  }

  function filterTasks(date) {
    //return filtered list where tasks are within today and that many days
    let filter;
    switch (date) {
      case "all":
        filter = (task) => task;
        break;
      case "today":
        filter = (task) => isSameDay(task.dueDate, new Date());
        break;
      case "week":
        filter = (task) => differenceInDays(task.dueDate, new Date()) <= 7;
        break;
      default:
        filter = (task) => task.project === date;
    }
    events.publish("tasksUpdated", tasks.filter(filter));
  }
})();
