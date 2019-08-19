// Author: Jacquelyn McCray
// Purpose: This module allows users to create their own task list, edit task names, and mark tasks as completed.

import tasksFactory from "./tasks-factory"
import renderTasksToDom from "./tasks-dom"
import tasksData from "./tasks-data"

const tasksMain = {
  addEventListenerToAddTaskButton() {
    const mainContainer = document.querySelector("#container")
    mainContainer.addEventListener("click", () => {
      if (event.target.id === "add-task-btn") {
        renderTasksToDom.renderAddTaskForm()
        this.saveNewTask()
      }
    })
  },
  addEventListenerToCompletedTasksBtn() {
    const mainContainer = document.querySelector("#container")
    mainContainer.addEventListener("click", event => {
      if (event.target.id === "see-completed-tasks-btn") {
        this.displayCompletedTasks()
      }
    })
  },
  addEventListenerToSeeTodoTasksBtn() {
    const mainContainer = document.querySelector("#container")
    mainContainer.addEventListener("click", event => {
      if (event.target.id === "see-todo-tasks-btn") {
        this.displayIncompleteTasks()
      }
    })
  },
  saveNewTask() {
    const postTaskToDatabaseAndRenderIncompleteTasks = () => {
      const activeUser = parseInt(sessionStorage.getItem("activeUser"))
      const newTaskObj = {
        task_name: newTaskName,
        task_date: newTaskDate,
        task_completed: false,
        userId: activeUser
      }
      renderTasksToDom.renderAddTaskBtn()
      tasksData.postNewTask(newTaskObj)
        .then(this.displayIncompleteTasks)
      mainContainer.removeEventListener("click", saveNewTaskHandler)
    }
    const mainContainer = document.querySelector("#container")
    const saveNewTaskHandler = () => {
      if (event.target.id === "save-task-btn") {
        const newTaskName = document.querySelector("#new-task-name").value
        const newTaskDate = document.querySelector("#new-task-date").value
        if (newTaskDate !== "" && newTaskName !== "") {
          const todaysDate = new Date().toLocaleDateString()
          const formattedTaskDate = new Date(newTaskDate).toLocaleDateString()
          if (formattedTaskDate < todaysDate) {
            const confirmDate = confirm("That date has already passed. Are you sure you want to use this date?")
            if (confirmDate === true) {
              postTaskToDatabaseAndRenderIncompleteTasks()
            }
          }
          postTaskToDatabaseAndRenderIncompleteTasks()
        }
        else if (newTaskDate === "" && newTaskName === "") {
          alert("fill out the form")
        }
      } else if (event.target.id === "cancel-task-btn") {
        renderTasksToDom.renderAddTaskBtn()
        mainContainer.removeEventListener("click", saveNewTaskHandler)
      }
    }
    mainContainer.addEventListener("click", saveNewTaskHandler)
  },
  checkOrUncheckTask() {
    const mainContainer = document.querySelector("#container")
    mainContainer.addEventListener("click", () => {
      if (event.target.id.startsWith("task-checkbox")) {
        const taskId = event.target.id.split("--")[1]
        if (event.target.checked === true) {
          tasksData.getSingleTask(taskId)
            .then(completedTaskObj => {
              completedTaskObj.task_completed = true
              tasksData.putTask(completedTaskObj)
                .then(this.displayIncompleteTasks)
            })
        } else if (event.target.checked === false) {
          tasksData.getSingleTask(taskId)
            .then(taskObj => {
              taskObj.task_completed = false
              tasksData.putTask(taskObj)
                .then(this.displayCompletedTasks)
            })
        }
      }
    })
  },
  editTaskName() {
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
                tasksData.putTask(taskObj)
                  .then(() => {
                    if (taskObj.task_completed === false) {
                      this.displayIncompleteTasks()
                    } else { this.displayCompletedTasks() }
                  })
              }
            })
          })
      }
    })
  },
  displayIncompleteTasks() {
    const userId = parseInt(sessionStorage.getItem("activeUser"))
    tasksData.getIncompleteTasks(userId)
      .then(allTasks => {
        document.querySelector("#taskCardsContainer").innerHTML = ""
        allTasks.sort((a, b) => (a.task_date > b.task_date) ? 1 : -1)
        allTasks.forEach(task => {
          task.task_date = new Date(task.task_date).toLocaleDateString()
          const taskHtml = tasksFactory.taskCardHtml(task)
          renderTasksToDom.renderTasksToDom(taskHtml)
        })
      })
  },
  displayCompletedTasks() {
    const userId = parseInt(sessionStorage.getItem("activeUser"))
    tasksData.getCompletedTasks(userId)
      .then(allTasks => {
        document.querySelector("#taskCardsContainer").innerHTML = ""
        allTasks.sort((a, b) => (a.task_date > b.task_date) ? 1 : -1)
        allTasks.forEach(task => {
          task.task_date = new Date(task.task_date).toLocaleDateString()
          const taskHtml = tasksFactory.taskCardHtml(task)
          renderTasksToDom.renderTasksToDom(taskHtml)
        })
      })
  },
  invokeAllTaskFunctions() {
    this.addEventListenerToAddTaskButton()
    this.addEventListenerToCompletedTasksBtn()
    this.addEventListenerToSeeTodoTasksBtn()
    this.editTaskName()
    this.checkOrUncheckTask()
  }
}

export default tasksMain