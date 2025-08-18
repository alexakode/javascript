const listContainer = document.getElementById("list-container");

const taskInput = document.querySelector("#task-input");
const taskForm = document.querySelector("#task-form");

let tasks = [];
// use local storage
const saveTasksToStorage = () =>
  localStorage.setItem("tasks", JSON.stringify(tasks));
// create todo
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(taskForm);
  const userInput = formData.get("task-input");
  taskInput.value = ""; // clear input field
  //   validation
  if (!userInput) {
    return alert("Please enter a task.");
  }
  tasks.push({
    timestamp: new Date(),
    description: userInput,
    complete: false,
  });
  saveTasksToStorage(); // save to local storage
  renderPage();
});

// load individual tasks, render on page
const buildPage = (tasks) => {
  listContainer.replaceChildren(); // clear previous tasks
  // loop over each task, create some elements
  tasks.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("description");
    descriptionElement.textContent = task.description;
    taskContainer.append(descriptionElement);
    listContainer.append(taskContainer);
  });
};

// render our page
const renderPage = () => {
  // load tasks from local storage

  // filters a-z, z-a, newest, oldest, vice versa

  buildPage(tasks);
};
renderPage();
