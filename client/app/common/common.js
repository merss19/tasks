import angular from 'angular';
import Navbar from './navbar/navbar';

import SideLeft from './sideLeft/sideLeft';

let commonModule = angular.module('app.common', [
  Navbar,
  SideLeft
])
  
.name;

export default commonModule;
