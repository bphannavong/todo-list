import events from "./mediator.js";

const sidebar = (function () {
  // Cache dom
  const allTasks = document.getElementById("all");
  const today = document.getElementById("today");
  const thisWeek = document.getElementById("week");
  const projects = document.getElementById("projects");
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

  events.subscribe("projectAdded", renderProjects);

  function renderProjects(projArr) {
    projArr.forEach((proj) => {
      const component = document.createElement("div");
      component.innerHTML = proj;
      console.log(proj);
      component.addEventListener("click", () => {
        events.publish("filterChosen", proj);
      });
      projects.appendChild(component);
    });
  }
})();
