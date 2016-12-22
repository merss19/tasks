import template from './taskItem.html';
import controller from './taskItem.controller';
import './taskItem.styl';

let taskItemComponent = {
  restrict: 'E',
  bindings: {
      item: '<',
      delete: '&'
  },
  template,
  controller,
  controllerAs:'vm'
};

export default taskItemComponent;
