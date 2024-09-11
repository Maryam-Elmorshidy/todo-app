import {
  buttonThemeElement,
  getCheckBoxElements,
  getdeleteIcons,
  TaskListElement,
  TaskListLink,
  TaskSearchBarButton,
} from "./elements";
import { addTask, deleteTask, toggleDarkMode, toggleTask } from "./utils";

export const initTaskLitseners = () => {
  getdeleteIcons().forEach((icon, index) => {
    // console.log(index);
    icon.addEventListener("click", (event) => deleteTask(event, index));
  });
  getCheckBoxElements().forEach((box, index) => {
    // console.log(index);
    box.addEventListener("click", (e) => toggleTask(e, index));
    box.addEventListener("keydown", (e) => {
      e.key === "Enter" && toggleTask(e, index);
    });
  });
};

export const initListeners = () => {
  buttonThemeElement.addEventListener("click", toggleDarkMode);

  TaskSearchBarButton.addEventListener("click", addTask);

  TaskListLink.addEventListener("click", () => {
    TaskListElement.classList.toggle("TaskList__list--hideCompleted");
    TaskListLink.classList.toggle("TaskList__link--isActive");
  });
};
