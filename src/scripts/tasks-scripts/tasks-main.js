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
            .then(this.displayAllTasks)
        }
        else {
          alert("fill out the form")
        }
      }
    })
  },
  // STARTED CODING DELETE FUNCTIONALITY BELOW
  deleteTask() {
    const mainContainer = document.querySelector("#container")
    mainContainer.addEventListener("click", () => {
      if (event.target.id.split("--")[0] === "delete-task-btn") {
        const taskId = event.target.id.split("--")[1]
        tasksData.deleteTask(taskId)
          .then(this.displayAllTasks)
      }
    })
  },
  markTaskComplete() {
    const mainContainer = document.querySelector("#container")
    mainContainer.addEventListener("click", () => {
      if (event.target.id.split("--")[0] === "task-checkbox") {
        const taskId = event.target.id.split("--")[1]
        tasksData.getSingleTask(taskId)
          .then(completedTaskObj => {
            completedTaskObj.task_completed = true
            tasksData.editTask(completedTaskObj)
          }).then(this.displayAllTasks)
      }
    })
  },
  editTask() {
    const mainContainer = document.querySelector("#container")
    mainContainer.addEventListener("click", () => {
      if (event.target.id.split("--")[0] === "edit-task-btn") {
        const taskId = event.target.id.split("--")[1]
        tasksData.getSingleTask(taskId)
          .then((taskObj) => {
            renderTasksToDom.renderEditForm(taskObj)
          })
      }
      else if (event.target.id.split("--")[0] === "save-task-edits-btn") {
        const editNameFeild = document.querySelector("#edit-task-name").value
        const editDateFeild = document.querySelector("#edit-task-date").value
        const taskId = event.target.id.split("--")[1]
        const activeUser = sessionStorage.getItem("activeUser")
        const updatedTask = {
          task_name: editNameFeild,
          task_date: editDateFeild,
          task_completed: false,
          userId: activeUser,
          id: taskId
        }
        tasksData.editTask(updatedTask).then(this.displayAllTasks)
      }
    })
  },


  displayAllTasks() {
    tasksData.getTasks()
      .then(allTasks => {
        document.querySelector("#taskCardsContainer").innerHTML = ""
        allTasks.forEach(task => {
          const taskHtml = tasksFactory.taskCardHtml(task)
          renderTasksToDom.renderTasksToDom(taskHtml)
        })
      })
  }
}

export default tasksMain