const tasksFactory = {
  newTaskFormHtml() {
    return `
    <fieldset id="new-task-form">
      <input id="new-task-name" type="text" placeholder="Task Name">
      <label>Expected Completion Date: </label>
      <input id="new-task-date" type="date" placeholder="">
      <button id="save-task-btn">Save New Task</button>
      <button id="cancel-task-btn">Cancel</button>
      </fieldset>
      `
    },
    taskCardHtml(taskObj) {
      return `
      <div id="taskCard--${taskObj.id}" class="taskCard">
      <h2 id="task-name--${taskObj.id}">${taskObj.task_name}</h2>
      <date id="task-date--${taskObj.id}">Expected Completion Date: ${taskObj.task_date}</date>
      <label>Mark Task As Complete </label>
      <input id="task-checkbox--${taskObj.id}" type="checkbox" name="task" value="${taskObj.task_completed}" class="checkbox" ${taskObj.task_completed ? "checked" : ""}>
      </div>
      `
    },
    editTaskHtml(taskObj) {
      return `
      <fieldset id="new-task-form">
      <input id="edit-task-name" type="text" value="${taskObj.task_name}">
      <date id="task-date--${taskObj.id}">Expected Completion Date: ${taskObj.task_date}</date>
  </fieldset>`
  },
  addNewTaskButtonHtml(){
    return `
    <button id="add-task-btn">Add New Task</button>
    <button id="see-todo-tasks-btn">View To Do List</button>
    <button id="see-completed-tasks-btn">View Completed Tasks</button>
    `
  }
}

export default tasksFactory