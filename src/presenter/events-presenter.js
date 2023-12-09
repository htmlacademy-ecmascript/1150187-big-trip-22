import { render } from '../render';
import { EVENT_LIST_ITEMS_COUNT } from '../utils/constants';
import ListSortView from '../view/list-sort-view';
import NewPointFormView from '../view/new-point-form-view';
import EditPointFormView from '../view/edit-point-form-view';
import PointListView from '../view/point-list-view';
import PointItemView from '../view/point-item-view';

class EventsPresenter {
  pointListComponent = new PointListView();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new ListSortView(), this.eventsContainer);
    render(this.pointListComponent, this.eventsContainer);
    render(new EditPointFormView(), this.pointListComponent.getElement());

    for (let i = 0; i < EVENT_LIST_ITEMS_COUNT; i++) {
      render(new PointItemView(), this.pointListComponent.getElement());
    }

    render(new NewPointFormView(), this.pointListComponent.getElement());
  }
}

export default EventsPresenter;
