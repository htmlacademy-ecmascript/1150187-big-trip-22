import { createElement } from '../render';

const createPointListTemplate = () => '<ul class="trip-events__list"></ul>';

class PointListView {
  getTemplate() {
    return createPointListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
}

export default PointListView;
