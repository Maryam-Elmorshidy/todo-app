//
const buttonThemeElement = document.querySelector(".DarkThemeToggle");
const AppElement = document.querySelector(".App");
const inputElement = document.querySelector(".TaskSearchBar__input");
const TaskListElement = document.querySelector(".TaskList__list");
const TaskSearchBarButton = document.querySelector(".TaskSearchBar__button");
const TaskListLink = document.querySelector(".TaskList__link");
const getdeleteIcons = () => document.querySelectorAll(".TaskList__deleteIcon");
const getCheckBoxElements = () =>
  document.querySelectorAll(".TaskList__checkbox");

export {
  buttonThemeElement,
  AppElement,
  inputElement,
  TaskListElement,
  TaskSearchBarButton,
  TaskListLink,
  getdeleteIcons,
  getCheckBoxElements,
};
