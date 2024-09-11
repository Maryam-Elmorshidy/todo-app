import { AppElement, inputElement, TaskListElement } from "./elements";
import { initTaskLitseners } from "./eventListeners";

export const toggleDarkMode = () => {
  AppElement.classList.toggle("App--isDark");
  saveToDB("darkmode", AppElement.classList.contains("App--isDark"));
};

//
const fetchData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : false;
};

const saveToDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const deleteTask = (e, index) => {
  const answer = confirm("هل أنت متأكد من حذف هذه المهمة؟");
  if (answer === false) return;

  const tasks = fetchData("Task");

  tasks.splice(index, 1);
  saveToDB("Task", tasks);
  initTaskList(tasks);
};

export const toggleTask = (event, index) => {
  const tasks = fetchData("Task");
  event.currentTarget.parentElement.classList.toggle(
    "TaskList__taskContent--isActive"
  );
  tasks[index].isCompleted = !tasks[index].isCompleted;
  saveToDB("Task", tasks);
};

export const renderTaskList = (tasks) => {
  let taskList = "";
  tasks.forEach((task) => {
    taskList += `<li class="TaskList__taskContent${
      task.isCompleted ? " TaskList__taskContent--isActive" : ""
    }">
                <div class="TaskList__checkbox" tabindex="0" role="button">
                  <img
                    src="./assets/icon-checkmark.svg"
                    alt="checkmark"
                    class="TaskList__checkboxImg"
                  />
                </div>
                <div class="TaskList__valueContent">
                  <p class="TaskList__value">${task.value}</p>
                  <img
                    src="./assets/icon-basket.svg"
                    alt="icon-basket"
                    class="TaskList__deleteIcon"
                  />
                </div>
              </li>`;
  });
  TaskListElement.innerHTML = taskList;
  inputElement.value = "";
};

export const renderEmptyState = () => {
  TaskListElement.innerHTML = `
    <li class="EmptyList">
      <img src="./assets/icon-empty.svg" alt="list is empty" class="EmptyList__img">
      <p>قائمة المهام فارغة</p>
    </li>`;
};

export const addTask = (event) => {
  event.preventDefault();
  const taskValue = inputElement.value;
  if (!taskValue) return;

  const task = {
    value: taskValue,
    isCompleted: false,
  };

  const tasks = fetchData("Task") || [];

  tasks.push(task);

  saveToDB("Task", tasks);
  initTaskList(tasks);
};

export const initTaskList = (tasks) => {
  if (tasks.length) {
    renderTaskList(tasks);
    initTaskLitseners();
  } else {
    renderEmptyState();
  }
};

export const initDataOnStartUp = () => {
  fetchData("darkmode") && toggleDarkMode();
  initTaskList(fetchData("Task"));
};
