import template from './sideDynamic.html';
import controller from './sideDynamic.controller';
import './sideDynamic.styl';

let sideDynamicComponent = {
  restrict: 'E',
    bindings: {
        value: '<',
        content: '<',
        close: '&',
        add: '&'
    },
  template,
  controller,
  controllerAs:'vm'
};

export default sideDynamicComponent;
