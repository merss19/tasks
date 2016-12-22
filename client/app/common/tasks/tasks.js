import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tasksComponent from './tasks.component';

let tasksModule = angular.module('tasks', [

])

.component('tasks', tasksComponent)

.name;

export default tasksModule;
