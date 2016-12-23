import template from './sideDynamic.html';
import controller from './sideDynamic.controller';
import './sideDynamic.styl';

let sideDynamicComponent = {
	restrict: 'E',
	bindings: {
		value: '<',
		content: '<',
		close: '&',
		add: '&',
		current: '='
	},
	template,
	controller,
	controllerAs: 'vm'
};

export default sideDynamicComponent;
