import angular from 'angular';
import sideLeftComponent from './sideLeft.component';

let sideLeftModule = angular.module('sideLeft', [])

	.component('sideLeft', sideLeftComponent)

	.name;

export default sideLeftModule;
