const messagesData = {
    postNewMessage(messageObj) {
        return fetch("http://localhost:8088/messages?_expand=user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObj)
        })
            .then(newMessage => newMessage.json())
    },
    getMessages() {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(messages => messages.json())
    },
    deleteMessage(id) {
        return fetch(`http://localhost:8088/messages/${id}?_expand=user`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },

        })
            .then(newMessage => newMessage.json())
    },
    editMessage(messageObj) {
        return fetch(`http://localhost:8088/messages/${messageObj.id}?_expand=user`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObj)
        })
    },
    getSingleMessage(id) {
        return fetch(`http://localhost:8088/messages/${id}?_expand=user`)
            .then(messages => messages.json())
    }
}

export default messagesData