const form = document.getElementById("task-form");
const subcontainer = document.getElementById("subcontainer");
// subcontainer.style.backgroundColor = "red";
// subcontainer.style.color
function addtask(e) {
  e.preventDefault();
  let task = document.createElement("h2");
  task.textContent = form.task.value;
  subcontainer.appendChild(task);
  form.task.value = "";
  //   subcontainer.textContent = form.task.value;
}
form.addEventListener("submit", addtask);
