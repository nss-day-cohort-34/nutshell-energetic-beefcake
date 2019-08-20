import messagesFactory from "./messages-factory"
import renderMessagesToDom from "./messages-dom"
import messagesData from "./messages-data"

const messagesMain = {
    addEventListenerToAddMessageButton() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id === "add-message-btn") {
                renderMessagesToDom.renderAddMessageForm()
            }
        })
    },
    saveNewMessage() {
        const saveMessageFunction = () => {
            if (event.target.id === "post-message-btn") {
                const newMessage = document.querySelector("#message-text").value
                if (newMessage !== "") {
                    const activeUser = parseInt(sessionStorage.getItem("activeUser"))
                    const messageDate = new Date()
                    const newMessageObj = {
                        message: newMessage,
                        date: messageDate,
                        userId: activeUser
                    }
                    messagesData.postNewMessage(newMessageObj)
                        .then(messagesData.getMessages)
                        .then(allMessages => {
                            document.querySelector("#messageCardsContainer").innerHTML = ""
                            allMessages.forEach(message => {
                                const activeUser = parseInt(sessionStorage.getItem("activeUser"))
                                if (activeUser === message.userId) {
                                    const messagesHtml = messagesFactory.messageCardHtml(message)
                                    renderMessagesToDom.renderMessagesToDom(messagesHtml)
                                    renderMessagesToDom.renderEditAndDeleteButtons(message)
                                    mainContainer.removeEventListener("click", saveMessageFunction)
                                }
                                else {
                                    const messagesHtml = messagesFactory.messageCardHtml(message)
                                    renderMessagesToDom.renderMessagesToDom(messagesHtml)
                                    mainContainer.removeEventListener("click", saveMessageFunction)
                                }
                            })
                        }).then(() => this.scrollWindow())
                    document.querySelector("#messageFormContainer").innerHTML = messagesFactory.reRenderButton()
                }
                else {
                    alert("don't you wanna post nothin'?")
                }
            }
        }
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => saveMessageFunction())
    },
    // STARTED CODING DELETE FUNCTIONALITY BELOW
    deleteMessage() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id.split("--")[0] === "delete-message-btn") {
                const messageId = event.target.id.split("--")[1]
                messagesData.deleteMessage(messageId)
                    .then(messagesData.getMessages)
                    .then(allMessages => {
                        document.querySelector("#messageCardsContainer").innerHTML = ""
                        allMessages.forEach(message => {
                            const activeUser = parseInt(sessionStorage.getItem("activeUser"))
                            if (activeUser === message.userId) {
                                const messagesHtml = messagesFactory.messageCardHtml(message)
                                renderMessagesToDom.renderMessagesToDom(messagesHtml)
                                renderMessagesToDom.renderEditAndDeleteButtons(message)
                            }
                            else {
                                const messagesHtml = messagesFactory.messageCardHtml(message)
                                renderMessagesToDom.renderMessagesToDom(messagesHtml)
                            }
                        })
                    }).then(() => this.scrollWindow())

            }
        })
    },
    editMessage() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id.split("--")[0] === "edit-message-btn") {
                const messageId = event.target.id.split("--")[1]
                messagesData.getSingleMessage(messageId)
                    .then((messageObj) => {
                        renderMessagesToDom.renderEditForm(messageObj)
                    }).then(() => this.scrollWindow())
            }
            else if (event.target.id.split("--")[0] === "save-message-edits-btn") {
                const messageId = event.target.id.split("--")[1]
                const editMessageField = document.querySelector(`#message-text--${messageId}`).value
                const messageDate = new Date()
                const activeUser = parseInt(sessionStorage.getItem("activeUser"))
                const updatedMessage = {
                    message: editMessageField,
                    date: messageDate,
                    userId: activeUser,
                    id: messageId
                }
                messagesData.editMessage(updatedMessage).then(this.displayAllMessages).then(this.scrollWindow)
            }
        })
    },
    displayAllMessages() {
        messagesData.getMessages()
            .then(allMessages => {
                document.querySelector("#messageCardsContainer").innerHTML = ""
                allMessages.forEach(message => {
                    const activeUser = parseInt(sessionStorage.getItem("activeUser"))
                    if (activeUser === message.userId) {
                        const messagesHtml = messagesFactory.messageCardHtml(message)
                        renderMessagesToDom.renderMessagesToDom(messagesHtml)
                        renderMessagesToDom.renderEditAndDeleteButtons(message)
                    }
                    else {
                        const messagesHtml = messagesFactory.messageCardHtml(message)
                        renderMessagesToDom.renderMessagesToDom(messagesHtml)
                    }
                })
            }).then(() => messagesMain.scrollWindow())
    },
    scrollWindow() {
        const areaToScroll = document.querySelector("#messageCardsContainer")
        areaToScroll.scrollTo(0, areaToScroll.scrollHeight)

    },
    callAllMessageMethods() {
        this.editMessage()
        this.deleteMessage()
        this.saveNewMessage()
        this.addEventListenerToAddMessageButton()
    }
}

export default messagesMain