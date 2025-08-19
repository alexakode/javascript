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

const deleteTaskButton = (task) => {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    const taskIndex = tasks.indexOf(task);
    if (taskIndex > -1) {
      tasks.splice(taskIndex, 1); // remove task from array
      saveTasksToStorage(); // save to local storage
      renderPage(); // re-render page
    }
  });
  return deleteBtn;
};
const editTaskButton = (task, inputElement) => {
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    inputElement.readOnly = !inputElement.readOnly; // make input editable
    editBtn.textContent = inputElement.readOnly ? "Edit" : "Save";
    task.description = inputElement.value;
    saveTasksToStorage();
  });
  return editBtn;
};

const completeTaskInput = (task) => {
  const inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.checked = task.complete;
  inputElement.addEventListener("change", () => {
    task.complete = inputElement.checked;
    saveTasksToStorage();
  });
  return inputElement;
};

// load individual tasks, render on page
const buildPage = (tasks) => {
  listContainer.replaceChildren(); // clear previous tasks
  // loop over each task, create some elements
  tasks.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    const descriptionElement = document.createElement("input");
    descriptionElement.classList.add("description");
    descriptionElement.value = task.description;
    descriptionElement.readOnly = true; // make it read-only

    taskContainer.append(
      descriptionElement,
      editTaskButton(task, descriptionElement),
      deleteTaskButton(task)
    );
    listContainer.append(taskContainer);
  });
};

// render our page
const renderPage = () => {
  // load tasks from local storage. localStorage.getItem("tasks") returns a string, so we need to parse it
  // if there are no tasks, we set tasks to an empty array
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  } else {
    tasks = [];
  }
  // filters a-z, z-a, newest, oldest, vice versa

  buildPage(tasks);
};
renderPage();
