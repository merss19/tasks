class DashboardController {
  constructor($log, $mdSidenav, dataService) {
      "ngInject";
    this.name = 'dashboard';

    this.$mdSidenav = $mdSidenav
    this.$log = $log
      this.data = dataService



    this.value = {
      project:"",
      task:"",
      desc:""
    }

      this.current = {}

      this.user = this.data.user
    this.projects = []
      this.tasks = []



    this.navContent = {
      project:false,
      task:false,
        open:false
    }

    this.openRight = this.open('right')
    this.closeSide = this.close('right')
    this.newProject = this.newProjectHandler
    //this.addProject = this.add
  }



    $onInit(){
        this.data.addTasks()
        this.data.addProjects()
        console.log('$onInit')
        this.tasks = this.data.tasks
        this.projects = this.data.projects
        console.log(this.projects)
    }

    removeItem(id){
        console.log('removeItem')
        console.log(id)
        this.data.remove(id)
        this.tasks = this.data.tasks
        //this.tasks = this.tasks.filter((task) => task.id !==id)
        //this.tasks =[]
        console.log(this.tasks)
    }

    addTask(){
        console.log('taskHandlerrrrrrrrr')
        this.navContent = {
            project:false,
            task:true,
            open:false
        }
        this.openRight()
    }

    openTask(){
        console.log('openrrrrrrrr')
        this.navContent = {
            project:false,
            task:false,
            open:true
        }

        this.current = this.data.current
        console.log('add')
        console.log(this.current)



        this.openRight()
    }

    newProjectHandler(){
        console.log('newProjectHandler')
        console.log(this.navContent)
        this.navContent = {
            project:true,
            task:false,
            open:false
        }
        this.openRight()

    }


    add(){
        console.log('add')
        if(this.navContent.project){
            let id = '_' + Math.random().toString(36).substr(2,9)

            if(this.value.project.trim().length > 0){

                let newProject = {
                    id:id,
                    title:this.value.project.trim(),
                    task_count:0
                }


                this.data.addProject(newProject)
                this.value = {
                    project:"",
                    task:"",
                    desc:""
                }
            }

        }

        if(this.navContent.task){

            if(this.value.task.trim().length > 0){
                let id = '_' + Math.random().toString(36).substr(2,9)
                let newTask = {
                    date:"Today",
                    tasks:[
                        {
                            id:id,
                            task:this.value.task.trim(),
                            desc:this.value.desc.trim()
                        }

                    ]

                }

                this.data.addTask(newTask)
                this.value = {
                    project:"",
                    task:"",
                    desc:""
                }

            }

        }


    }

    close(nav){
        console.log('close')
        return ()=> {
            console.log('closef')
            this.navContent = {
                project:false,
                task:false
            }

            this.$mdSidenav(nav)
                .close()
                .then(() => {
                    this.$log.debug("toggle " + nav + "close");
                });
        }
    }

    open(nav){

        return ()=> {
            console.log('open')
            console.log(this.$mdSidenav)
            console.log(this)
            this.$mdSidenav(nav)
                .open()
                .then(() => {
                    this.$log.debug("toggle " + nav + "open");
                });
        }
    }
}

export default DashboardController;
