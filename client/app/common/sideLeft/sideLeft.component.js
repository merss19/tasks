import template from './sideLeft.html';
import controller from './sideLeft.controller';
import './sideLeft.styl';
//import '../../../assets/icon/styles.css'

let sideLeftComponent = {
  restrict: 'E',
  bindings: {
      projects: '<',
      user:'<',
      newProject: '&'
  },
  template,
  controller,
  controllerAs:'vm'
};

export default sideLeftComponent;
