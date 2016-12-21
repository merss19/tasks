import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import SideLeft from './sideLeft/sideLeft';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  SideLeft
])
  
.name;

export default commonModule;
