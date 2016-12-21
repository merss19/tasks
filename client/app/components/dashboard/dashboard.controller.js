class DashboardController {
  constructor($log, $mdSidenav, dataService) {
      "ngInject";
    this.name = 'dashboard';

    this.$mdSidenav = $mdSidenav
    this.$log = $log
      this.data = dataService
      console.log('DashboardController')
      console.log(this.data)



    /*this.user = {
      img:'src/assets/img/ava.jpg'
    }*/
    this.dash = {
      project:"Project name",
      task:"Task Name",
      desc:"Description"
    }

      this.user = this.data.user
    this.projects = this.data.projects
      this.tasks = this.data.tasks
      console.log(this.user)


    this.navContent = {
      project:false,
      task:false
    }

    this.openRight = this.open('right')
    this.closeRight = this.close('right')
    this.newProject = this.newProjectHandler
    this.addProject = this.add
    this.addTask = this.taskHandler
  }

    taskHandler(){
        console.log('taskHandler')
        this.navContent = {
            project:false,
            task:true
        }
        this.openRight()
    }

    newProjectHandler(){
        console.log('newProjectHandler')
        console.log(this.navContent)
        this.navContent = {
            project:true,
            task:false
        }
        this.openRight()

    }


    add(){
        console.log('add')
        if(this.navContent.project){

            if(this.dash.project.trim().length > 0){
                let newProject = {
                    id:12,
                    title:this.dash.project.trim(),
                    task_count:0
                }
                this.project.push(newProject)
                console.log(this.project)
            }

        }

        if(this.navContent.task){

            if(this.dash.task.trim().length > 0){
                let newTask = {
                    id:12,
                    task:this.dash.task.trim(),
                    desc:this.dash.desc.trim()
                }

                this.tasks.push(newTask)
                console.log(newTask)
            }

        }


        //let name = this.dash.project.trim()
        return ()=>{
            console.log(this.dash.project.trim())
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
