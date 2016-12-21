import template from './sideLeft.html';
import controller from './sideLeft.controller';
import './sideLeft.scss';

let sideLeftComponent = {
  restrict: 'E',
  bindings: {
      projects: '<',
      newProject: '&'
  },
  template,
  controller,
  controllerAs:'vm'
};

export default sideLeftComponent;
