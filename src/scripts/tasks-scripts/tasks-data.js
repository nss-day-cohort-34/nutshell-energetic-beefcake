const tasksData = {
  postNewTask(taskObj) {
      return fetch("http://localhost:8088/tasks", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(taskObj)
      })
          .then(newTask => newTask.json())
  },
  getTasks() {
      return fetch("http://localhost:8088/tasks?task_completed=false")
          .then(tasks => tasks.json())
  },
  deleteTask(id) {
      return fetch(`http://localhost:8088/tasks/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          },

      })
          .then(newTask => newTask.json())
  },
  editTask(taskObj) {
      return fetch(`http://localhost:8088/tasks/${taskObj.id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(taskObj)
      })
  },
  getSingleTask(id) {
      return fetch(`http://localhost:8088/tasks/${id}`)
          .then(tasks => tasks.json())
  }
}

export default tasksData