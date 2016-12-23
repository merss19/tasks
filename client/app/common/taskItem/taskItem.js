import angular from 'angular';
import uiRouter from 'angular-ui-router';
import taskItemComponent from './taskItem.component';

let taskItemModule = angular.module('taskItem', [])

	.component('taskItem', taskItemComponent)

	.name;

export default taskItemModule;
