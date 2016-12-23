class TaskItemController {
	constructor(dataService) {
		"ngInject";

		this.name = 'taskItemddd';
		this.deleteBox = false
		this.data = dataService
	}

	remove(id) {
		this.delete({id: id})
	}

	open(task) {
		this.data.currentTaskSet(task)
		this.openTask()
	}

}

export default TaskItemController;
