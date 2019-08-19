import messagesFactory from "./messages-factory"

const renderMessagesToDom = {
    renderAddMessageForm() {
        const messagesContainer = document.querySelector("#messageFormContainer")
        messagesContainer.innerHTML = messagesFactory.newMessageFormHtml()
    },
    renderMessagesToDom(htmlString) {
        const messagesContainer = document.querySelector("#messageCardsContainer")
        messagesContainer.innerHTML += htmlString
    },
    renderEditForm(messageObj) {
        const editMessageCard = document.querySelector(`#messageCard--${messageObj.id}`)
        editMessageCard.innerHTML = messagesFactory.editmessageHtml(messageObj)
    },
    renderEditAndDeleteButtons(messageObj) {
        const messageContainer = document.querySelector(`#messageCard--${messageObj.id}`)
        messageContainer.innerHTML += messagesFactory.editandDeleteMessageButtons(messageObj)
    }
}

export default renderMessagesToDom