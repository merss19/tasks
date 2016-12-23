export default class DataService {

    constructor() {
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

    addProjectsHandler() {
        this.projects = this.getProjects()

    }

    addTasksHandler() {
        this.tasks = this.getTasks()
    }

    currentTaskSet(task) {
        this.current = task
    }


    getTasks() {
        return [
            {
                "date": "Today",
                "tasks": [
                    {
                        "id": 111,
                        "task": "Create a company",
                        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    }
                ]
            },
            {
                "date": "Tomorrow",
                "tasks": [
                    {
                        "id": 222,
                        "task": "Call in barber shop",
                        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    }
                ]
            },
            {
                "date": "Friday",
                "tasks": [
                    {
                        "id": 33,
                        "task": "Call in barber",
                        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut..."
                    },
                    {
                        "id": 44,
                        "task": "Call in",
                        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ..."
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

    addTask(task) {
        this.tasks.push(task)
    }

    addProject(project) {
        this.projects.push(project)
    }

    remove(id) {
        this.tasks.forEach(function (item) {
            item.tasks = item.tasks.filter((task) => task.id !== id)
        })

        this.tasks = this.tasks.filter((task) => task.tasks.length)

    }

}
