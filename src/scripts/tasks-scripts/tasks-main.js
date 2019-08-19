import tasksFactory from "./tasks-factory"
import renderTasksToDom from "./tasks-dom"
import tasksData from "./tasks-data"

const tasksMain = {
  addEventListenerToAddTaskButton() {
    const mainContainer = document.querySelector("#container")
    mainContainer.addEventListener("click", () => {
      if (event.target.id === "add-task-btn") {
        renderTasksToDom.renderAddTaskForm()
      }
    })
  },
  saveNewTask() {
    const mainContainer = document.querySelector("#container")
    mainContainer.addEventListener("click", () => {
      if (event.target.id === "save-task-btn") {
        const newTaskName = document.querySelector("#task-name").value
        const newTaskDate = document.querySelector("#task-date").value
        if (newTaskDate !== "" && newTaskName !== "") {
          const activeUser = sessionStorage.getItem("activeUser")

          const newTaskObj = {
            task_name: newTaskName,
            task_date: newTaskDate,
            task_completed: false,
            userId: activeUser
          }
          renderTasksToDom.renderAddTaskBtn()
          tasksData.postNewTask(newTaskObj)
            .then(this.displayIncompleteTasks)
        }
        else {
          alert("fill out the form")
        }
      }
    })
  },
  deleteTask() {
    const mainContainer = document.querySelector("#container")
    mainContainer.addEventListener("click", () => {
      if (event.target.id.split("--")[0] === "delete-task-btn") {
        const taskId = event.target.id.split("--")[1]
        tasksData.deleteTask(taskId)
          .then(this.displayIncompleteTasks)
      }
    })
  },
  checkOrUncheckTask() {
    const mainContainer = document.querySelector("#container")
    mainContainer.addEventListener("click", () => {
      if (event.target.id.split("--")[0] === "task-checkbox") {
        if (event.target.checked === true) {
          console.log(event.target.checked)
          const taskId = event.target.id.split("--")[1]
          tasksData.getSingleTask(taskId)
            .then(completedTaskObj => {
              completedTaskObj.task_completed = true
              tasksData.editTask(completedTaskObj)
            }).then(this.displayIncompleteTasks)
        } else if (event.target.checked === false) {
          const taskId = event.target.id.split("--")[1]
          tasksData.getSingleTask(taskId)
            .then(taskObj => {
              taskObj.task_completed = false
              console.log(taskObj)
              tasksData.editTask(taskObj)
            }).then(() => {
              const userId = sessionStorage.getItem("activeUser")
              tasksData.getCompletedTasks(userId)
                .then(allTasks => {
                  document.querySelector("#taskCardsContainer").innerHTML = ""
                  allTasks.forEach(task => {
                    const taskHtml = tasksFactory.taskCardHtml(task)
                    renderTasksToDom.renderTasksToDom(taskHtml)
                  })
                })
            })
        }
      }
    })
  },
  editTask() {
    const mainContainer = document.querySelector("#container")
    mainContainer.addEventListener("click", () => {
      if (event.target.id.includes("task-name--")) {
        const taskId = event.target.id.split("--")[1]
        tasksData.getSingleTask(taskId)
          .then((taskObj) => {
            renderTasksToDom.renderEditForm(taskObj)
            const taskName = document.querySelector("#edit-task-name")
            taskName.addEventListener("keypress", keyPressEvent => {
              if (keyPressEvent.key === "Enter") {
                const newTaskName = document.querySelector("#edit-task-name").value
                taskObj.task_name = newTaskName
                tasksData.editTask(taskObj).then(this.displayIncompleteTasks)
              }
            })
          })
      }
    })
  },
  displayIncompleteTasks() {
    const userId = sessionStorage.getItem("activeUser")
    tasksData.getIncompleteTasks(userId)
      .then(allTasks => {
        document.querySelector("#taskCardsContainer").innerHTML = ""
        allTasks.forEach(task => {
          const taskHtml = tasksFactory.taskCardHtml(task)
          renderTasksToDom.renderTasksToDom(taskHtml)
        })
      })
  },
  addEventListenerToCompletedTasksBtn() {
    const mainContainer = document.querySelector("#container")
    const userId = sessionStorage.getItem("activeUser")
    mainContainer.addEventListener("click", event => {
      if (event.target.id === "see-completed-tasks-btn") {
        tasksData.getCompletedTasks(userId)
          .then(allTasks => {
            document.querySelector("#taskCardsContainer").innerHTML = ""
            allTasks.forEach(task => {
              const taskHtml = tasksFactory.taskCardHtml(task)
              renderTasksToDom.renderTasksToDom(taskHtml)
            })
          })
      }
    })
  },
  addEventListenerToSeeTodoTasksBtn() {
    const mainContainer = document.querySelector("#container")
    const userId = sessionStorage.getItem("activeUser")
    mainContainer.addEventListener("click", event => {
      if (event.target.id === "see-todo-tasks-btn") {
        tasksData.getIncompleteTasks(userId)
          .then(this.displayIncompleteTasks)
      }
    })
  },
  invokeAllTaskFunctions() {
    this.addEventListenerToAddTaskButton()
    this.addEventListenerToCompletedTasksBtn()
    this.addEventListenerToSeeTodoTasksBtn()
    this.saveNewTask()
    this.editTask()
    this.checkOrUncheckTask()
  }
}

export default tasksMain