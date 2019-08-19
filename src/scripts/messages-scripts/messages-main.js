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
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
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
                                const messageHtml = messagesFactory.messageCardHtml(message)
                                renderMessagesToDom.renderMessagesToDom(messageHtml)
                            })
                        })
                    document.querySelector("#message-text").value = ""
                }
                else {
                    alert("don't you wanna post nothin'?")
                }
            }
        })
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
                            const messageHtml = messagesFactory.messageCardHtml(message)
                            renderMessagesToDom.renderMessagesToDom(messageHtml)
                        })
                    })

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
                        console.log(messageObj.id)
                        renderMessagesToDom.renderEditForm(messageObj)
                    })
            }
            else if (event.target.id.split("--")[0] === "save-message-edits-btn") {
                const editMessageField = document.querySelector("#message-text").value
                const messageId = event.target.id.split("--")[1]
                const messageDate = new Date()
                const activeUser = parseInt(sessionStorage.getItem("activeUser"))
                const updatedMessage = {
                    message: editMessageField,
                    date: messageDate,
                    userId: activeUser,
                    id: messageId
                }
                messagesData.editMessage(updatedMessage).then(this.displayAllMessages)
            }
        })
    },
    displayAllMessages() {
        messagesData.getMessages()
            .then(allMessages => {
                document.querySelector("#messageCardsContainer").innerHTML = ""
                allMessages.forEach(message => {
                    const messagesHtml = messagesFactory.messageCardHtml(message)
                    renderMessagesToDom.renderMessagesToDom(messagesHtml)
                })
            })
    },
    callAllMessageMethods() {
        this.displayAllMessages()
        this.editMessage()
        this.deleteMessage()
        this.saveNewMessage()
        this.addEventListenerToAddMessageButton()
    }
}

export default messagesMain