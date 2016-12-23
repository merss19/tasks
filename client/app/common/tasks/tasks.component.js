import template from './tasks.html';
import controller from './tasks.controller';
import './tasks.styl';

let tasksComponent = {
  restrict: 'E',
  bindings: {
    tasks: '<',
    addTask: '&',
      openTask:'&',
      del: '&'
  },
  template,
  controller,
    controllerAs:'vm'
};

export default tasksComponent;
