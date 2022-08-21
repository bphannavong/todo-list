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

  events.subscribe("projectsUpdated", renderProjects);

  function renderProjects(projArr) {
    if (!projArr) {
      return;
    }
    projects.innerHTML = "";
    projArr.forEach((proj) => {
      const component = document.createElement("div");
      component.innerHTML = proj.name;
      component.addEventListener("click", () => {
        events.publish("filterChosen", proj.name);
      });
      projects.appendChild(component);
    });
  }
})();
