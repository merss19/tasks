class TaskItemController {
  constructor(dataService) {
    "ngInject";

    this.name = 'taskItemddd';
    this.deleteBox = false
      console.log('this.tasks')
    console.log(this.tasks)
      this.data = dataService



  }
  remove(id){
    console.log('deleteHandlerfrfgggg')
    console.log(id)
      console.log(this.deleteBox)

        this.delete({id:id})
  }

    open(task){
        console.log('open-taskitem')
        console.log(task)
        this.data.currentTaskSet(task)
        this.openTask()
    }

}

export default TaskItemController;
