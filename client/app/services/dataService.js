//import cuid from 'cuid';


export default class DataService {

    constructor() {
        console.log('Data')

        this.user = this.getUser()
        this.projects = []
        this.addTasks = this.addTasksHandler
        this.addProjects = this.addProjectsHandler
        this.tasks = []
        this.current = {}
    }


    getUser() {
        return {
                "id": 123,
                "name": "Trevor Reyes",
                "ava": "assets/user.png"
            }

    }

    addProjectsHandler(){
        console.log('addTasksHandler')
        this.projects = this.getProjects()

    }

    addTasksHandler(){
        console.log('addTasksHandler')
        this.tasks = this.getTasks()
        console.log(this.tasks)
    }

    currentTaskSet(task){
        console.log('currentTaskSet')
        console.log(task)
        this.current = task
        console.log(this.current)
    }



    getTasks() {
        return [
            {
                "date":"Today",
                "tasks": [
                    {
                        "id": 111,
                        "task":"Create a company",
                        "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    }
                ]
            },
            {
                "date":"Tomorrow",
                "tasks": [
                    {
                        "id": 222,
                        "task":"Call in barber shop",
                        "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    }
                ]
            },
            {
                "date":"Friday",
                "tasks": [
                    {
                        "id": 33,
                        "task":"Call in barber",
                        "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut..."
                    },
                    {
                        "id": 44,
                        "task":"Call in",
                        "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ..."
                    }
                ]
            }

        ]
    }

    getProjects() {
        return [
            {
                "id": 123,
                "title": "Private",
                "task_count": 8
            },
            {
                "id": 236,
                "title": "Decode",
                "task_count": 25
            },
            {
                "id": 235,
                "title": "Family",
                "task_count": 3
            },
            {
                "id": 233,
                "title": "Cookle",
                "task_count": 13
            }
        ]
    }

    addTask(task){
        this.tasks.push(task)
    }

    addProject(project){
        this.projects.push(project)
    }

    remove(id){
        this.tasks.forEach(function(item) {
            item.tasks = item.tasks.filter((task) => task.id !==id)
        })
        this.tasks = this.tasks.filter((task) => task.tasks.length)

       //this.tasks = this.tasks.filter((task) => task.id !==id)

        console.log('remove')
        console.log(this.tasks)
    }

 /* add(description) {
    const task = new Task(description);
    this.list.push(task);
    this.$refreshList();

    return task;
  }

  toggleAll() {
    const complete = this.countPending() !== 0;
    this.list = this.list.map((task) => {
      task.complete = !!complete;

      return task;
    });

    this.$filter();
  }

  toggleStatus(task) {
    task.complete = !task.complete;
    this.$filter();
  }

  remove(item) {
    this.list = this.list.filter((todo) => todo !== item);
    this.$filter();
  }

  clearCompleted() {
    this.list = this.list.filter((todo) => !todo.complete);
    this.$filter();
  }

  showCompleted() {
    this.filterState = 'completed';
    this.$filter();
  }

  showActive() {
    this.filterState = 'active';
    this.$filter();
  }

  showAll() {
    this.filterState = 'all';
    this.$filter();
  }

  $filter(filterState = this.filterState) {
    this.filterState = filterState;
    const showAll = ('all' === filterState);
    const showCompleted = 'completed' === filterState;

    this.filteredList = this.list.filter((item) => (showAll || showCompleted === item.complete));
  }

  countPending() {
    return this.list.filter((item) => !item.complete).length;
  }

  countCompleted() {
    return this.list.filter((item) => item.complete).length;
  }

  hasTasks() {
    return 0 !== this.list.length;
  }

  $refreshList() {
    this.$filter();
  }*/

}

/*class Task {
  constructor(description) {
    this.id = cuid();
    this.description = description;
    this.isCompleted = false;
  }

  get complete() {
    return this.isCompleted;
  }

  set complete(val) {
    this.isCompleted = !!val;
  }
}*/

