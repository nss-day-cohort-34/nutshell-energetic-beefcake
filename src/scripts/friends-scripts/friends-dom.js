import friendsFactory from "./friends-factory.js";


const renderFriends = {
    renderAllUsers(htmlString) {
        const friendsContainer = document.querySelector("#friend-cards-container")
        friendsContainer.innerHTML += htmlString
    },
    renderSearchBox() {
        const friendSearchContainer = document.querySelector("#friendFormContainer")
        friendSearchContainer.innerHTML = friendsFactory.searchForFriendsHtml()
    }
}

export default renderFriends