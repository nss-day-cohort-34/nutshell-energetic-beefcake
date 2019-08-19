const messagesFactory = {
    newMessageFormHtml() {
        return `
        <fieldset id="new-message-form">
            <textarea id="message-text" placeholder="compose your message..."></textarea>
            <button id="post-message-btn">Post New Message!</button>
        </fieldset>
        `
    },
    messageCardHtml(messageObj) {
        return `
        <div id="messageCard--${messageObj.id}">
            <p>${messageObj.message}</p>
            <p>posted by: ${messageObj.user.username}</p>
        </div>
        `
    },
    editandDeleteMessageButtons() {
        return `
        <button id="edit-message-btn--${messageObj.id}">Edit Message!</button>
        <button id="delete-message-btn--${messageObj.id}">Delete Message!</button>
        `
    },
    editmessageHtml(messageObj) {
        return `
        <fieldset id="new-message-form">
            <textarea id="message-text" placeholder="your message here...">${messageObj.message}</textarea>
            <button id="save-message-edits-btn--${messageObj.id}">Save Changes!</button>
        </fieldset>
        `
    }
}

export default messagesFactory

// const messageFactory = {
//     newMessageForm() {
//         return `
//         <input type="text" placeholder="message title" />
//         <textarea placeholder="compose your message here"></textarea>
//         `
//     },
//     postedMessage(userObj, messageObj) {
//         return `
//     <h2>${userObj.username} shouts the following into the void:</h2>
//     <h3>${messageObj.title}</h3>
//     <p>${messageObj.message}</p>
//     <footer>posted on ${messageObj.date}</footer>
//     `
//     }
// }
