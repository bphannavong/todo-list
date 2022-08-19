import events from "./mediator.js";

const sidebar = (function () {
  // Cache dom
  const allTasks = document.getElementById("all");
  const today = document.getElementById("today");
  const thisWeek = document.getElementById("week");

  // Bind events
  allTasks.addEventListener("click", () => {
    events.publish("filterChosen", "all");
  });
  today.addEventListener("click", () => {
    events.publish("filterChosen", "today");
  });

  thisWeek.addEventListener("click", () => {
    events.publish("filterChosen", "week");
  });
})();
