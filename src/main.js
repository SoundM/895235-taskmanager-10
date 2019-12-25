import {createSiteMenuTemplate} from './components/site-menu.js';
import {createSortingTemplate} from './components/sorting';
import {createFilterTemplate} from './components/filter.js';
import {createTaskTemplate} from './components/task.js';
import {createTaskEditTemplate} from './components/task-edit.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button.js';
import {createBoardTemplate} from './components/board.js';

const TASK_COUNT = 3;


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeEnd`);
render(siteMainElement, createFilterTemplate(), `beforeEnd`);
render(siteMainElement, createBoardTemplate(), `beforeEnd`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);
render(boardElement, createSortingTemplate(), `afterBegin`);
render(taskListElement, createTaskEditTemplate(), `beforeEnd`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeEnd`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeEnd`);
