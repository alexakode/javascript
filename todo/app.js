const listContainer = document.getElementById("list-container");

let tasks = [
    /*
{
description: "Buy eggs",
isCompleted: true,
}
    */ 
];

// load individual tasks, render on page
const buildPage = (tasks) => {
  // loop over each task, create some elements
  tasks.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("description");
    descriptionElement.textContent = task.description;
    // {
    // description: "buy eggs",
    // date: "",
    // isCompleted
    // }
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