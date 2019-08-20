import friendsData from "./friends-data.js"
import renderFriends from "./friends-dom.js"
import friendsFactory from "./friends-factory.js";

const friendsMain = {
    displayPotentialFriends() {
        friendsData.getAllUsers()
            .then(friends => {
                friends.forEach(friend => {
                    const friendHtml = friendsFactory.allUsers(friend)
                    renderFriends.renderAllUsers(friendHtml)
                })
            })
    },
    addEventListenerToAddFriendBtn() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id === "search-friends-btn") {
                console.log(event.target)
                renderFriends.renderSearchBox()
            }
        })
    },
    invokeAllFriendsFunctions() {
        this.addEventListenerToAddFriendBtn()
    }
}

export default friendsMain