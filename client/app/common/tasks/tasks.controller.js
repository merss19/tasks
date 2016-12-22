class TasksController {
  constructor() {
    this.name = 'tasks'
    this.search = ''
    this.focus = this.focusHandler
    this.focusInput = true

    this.radio = ''
    console.log(this.radio)
  }

  focusHandler(){
    this.focusInput = !this.focusInput
    if(this.search.length) this.focusInput = false
    console.log(this.focusInput)
  }

}

export default TasksController;
