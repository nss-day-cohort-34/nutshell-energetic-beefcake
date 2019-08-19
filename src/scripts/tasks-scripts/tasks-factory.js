const tasksFactory = {
  newTaskFormHtml() {
    return `
    <fieldset id="new-task-form">
      <input id="task-name" type="text" placeholder="Task Name">
      <label>Expected Completion Date: </label>
      <input id="task-date" type="date" placeholder="">
      <button id="save-task-btn">Save New Task</button>
      </fieldset>
      `
    },
    taskCardHtml(taskObj) {
      return `
      <div id="taskCard--${taskObj.id}">
      <h2 id="task-name--${taskObj.id}">${taskObj.task_name}</h2>
      <date id="task-date--${taskObj.id}">Expected Completion Date: ${taskObj.task_date}</date>
      <label>Mark Task As Complete </label>
      <input id="task-checkbox--${taskObj.id}" type="checkbox" name="task" value="${taskObj.completed}" ${taskObj.completed ? "checked" : ""}>
      <button id="edit-task-btn--${taskObj.id}">Edit Task</button>
    </div>
    `
  },
  editTaskHtml(taskObj) {
    return `
    <fieldset id="new-task-form">
      <input id="edit-task-name" type="text" value="${taskObj.task_name}">
      <label>Expected Completion Date: </label>
      <input id="edit-task-date" type="date" value="${taskObj.task_date}">
      <button id="save-task-edits-btn--${taskObj.id}">Save Changes!</button>
  </fieldset>`
  },
  addNewTaskButtonHtml(){
    return `
    <button id="add-task-btn">Add New Task</button>
    `
  }
}

export default tasksFactory