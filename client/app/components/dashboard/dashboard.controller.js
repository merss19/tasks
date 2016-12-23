class DashboardController {
	constructor($log, $mdSidenav, dataService) {
		"ngInject";

		this.$mdSidenav = $mdSidenav
		this.$log = $log
		this.data = dataService


		this.value = {
			project: "",
			task: "",
			desc: ""
		}

		this.current = {}

		this.user = this.data.user
		this.projects = []
		this.tasks = []


		this.navContent = {
			project: false,
			task: false,
			open: false
		}

		this.openRight = this.open('right')
		this.closeSide = this.close('right')
		this.newProject = this.newProjectHandler
	}


	$onInit() {
		this.data.addTasks()
		this.data.addProjects()
		console.log('$onInit')
		this.tasks = this.data.tasks
		this.projects = this.data.projects
		console.log(this.projects)
	}

	removeItem(id) {
		this.data.remove(id)
		this.tasks = this.data.tasks
	}

	addTask() {
		this.navContent = {
			project: false,
			task: true,
			open: false
		}

		this.openRight()
	}

	openTask() {
		this.navContent = {
			project: false,
			task: false,
			open: true
		}

		this.current = this.data.current
		this.openRight()
	}

	newProjectHandler() {
		this.navContent = {
			project: true,
			task: false,
			open: false
		}

		this.openRight()

	}


	add() {
		if (this.navContent.project) {
			let id = '_' + Math.random().toString(36).substr(2, 9)

			if (this.value.project.trim().length > 0) {

				let newProject = {
					id: id,
					title: this.value.project.trim(),
					task_count: 0
				}


				this.data.addProject(newProject)
				this.value = {
					project: "",
					task: "",
					desc: ""
				}
			}

		}

		if (this.navContent.task) {

			if (this.value.task.trim().length > 0) {
				let id = '_' + Math.random().toString(36).substr(2, 9)
				let newTask = {
					date: "Today",
					tasks: [
						{
							id: id,
							task: this.value.task.trim(),
							desc: this.value.desc.trim()
						}

					]

				}

				this.data.addTask(newTask)
				this.value = {
					project: "",
					task: "",
					desc: ""
				}

			}

		}


	}

	close(nav) {
		return ()=> {
			this.navContent = {
				project: false,
				task: false
			}

			this.$mdSidenav(nav)
				.close()
				.then(() => {
					this.$log.debug("toggle " + nav + "close");
				});
		}
	}

	open(nav) {
		return ()=> {
			this.$mdSidenav(nav)
				.open()
				.then(() => {
					this.$log.debug("toggle " + nav + "open");
				});
		}
	}
}

export default DashboardController
