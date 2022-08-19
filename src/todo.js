/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
import events from "./mediator.js";
import { isSameDay, addDays, differenceInDays } from "date-fns";

const todo = (function () {
  // task array with all todos
  let tasks = [];

  // bind events
  events.subscribe("formSubmitted", addTodo);
  events.subscribe("cardRemoved", removeTodo);
  events.subscribe("filterChosen", filterTasks);

  // Todo factory function
  const Todo = ([name, description, dueDate, priority]) => ({
    name,
    description,
    dueDate,
    priority,
  });

  tasks = [
    Todo(["jared", "w", addDays(new Date(), 5)]),
    Todo(["kenny", "w", new Date()]),
    Todo(["alpha", "w", addDays(new Date(), 10)]),
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

  // function isInRange(number) {
  //   let date2 = addDays(Date.now(), number);
  //   return function (date) {
  //     console.log(differenceInDays(date2, date));
  //     return differenceInDays(date2, date) <= number;
  //   };
  // }

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
        filter = (task) => task.project === date.project;
    }
    events.publish("tasksUpdated", tasks.filter(filter));
  }
})();
