import {render, RenderPosition} from './render.js';
import HeaderInfoView from './view/header-info-view.js';
import ListFilterView from './view/list-filter-view.js';
import EventsPresenter from './presenter/events-presenter.js';

const siteHeaderElement = document.querySelector('.page-header');
const siteHeaderMainElement = siteHeaderElement.querySelector('.trip-main');
const filterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');
const eventsPresenter = new EventsPresenter({eventsContainer: tripEventsContainer});

render(new HeaderInfoView(), siteHeaderMainElement, RenderPosition.AFTERBEGIN);
render(new ListFilterView(), filterElement);

eventsPresenter.init();
