import tasksFactory from "./tasks-factory"

const renderTasksToDom = {
    renderAddTaskForm() {
        const tasksContainer = document.querySelector("#taskFormContainer")
        tasksContainer.innerHTML = tasksFactory.newTaskFormHtml()
    },
    renderAddTaskBtn() {
        const tasksContainer = document.querySelector("#taskFormContainer")
        tasksContainer.innerHTML = tasksFactory.addNewTaskButtonHtml()
    },
    renderTasksToDom(htmlString) {
        const tasksContainer = document.querySelector("#taskCardsContainer")
        tasksContainer.innerHTML += htmlString
    },
    renderEditForm(taskObj) {
        const editTaskCard = document.querySelector(`#taskCard--${taskObj.id}`)
        editTaskCard.innerHTML = tasksFactory.editTaskHtml(taskObj)
    }
}

export default renderTasksToDom