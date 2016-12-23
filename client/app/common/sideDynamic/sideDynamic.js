import angular from 'angular';
import sideDynamicComponent from './sideDynamic.component';

let sideDynamicModule = angular.module('sideDynamic', [])

	.component('sideDynamic', sideDynamicComponent)

	.name;

export default sideDynamicModule;
