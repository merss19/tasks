import angular from 'angular';
import tasksComponent from './tasks.component';

let tasksModule = angular.module('tasks', [])

	.component('tasks', tasksComponent)

	.name;

export default tasksModule;
