import angular from 'angular'
import Tasks from './tasks/tasks'
import TasksItem from './taskItem/taskItem'
import SideLeft from './sideLeft/sideLeft'
import SideDynamic from './sideDynamic/sideDynamic'

let commonModule = angular.module('app.common', [
  SideLeft,
  Tasks,
    TasksItem,
    SideDynamic
])
  
.name;

export default commonModule;
