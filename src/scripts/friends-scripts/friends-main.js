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
                renderFriends.renderSearchBox()
                const friendsSearch = document.querySelector("#search-for-friends")
                friendsSearch.addEventListener("keyup", () => {
                    friendsData.searchUsers(friendsSearch.value).then(friends => {
                        const friendsContainer = document.querySelector("#friend-cards-container")
                        friendsContainer.innerHTML = ""
                        friends.forEach(friend => {
                            const friendHtml = friendsFactory.allUsers(friend)
                            renderFriends.renderAllUsers(friendHtml)
                        })
                    })
                    // .then(searchedUsers => {
                    //     const users = searchedUsers
                    //     friendsData.getAllConnections().then(connection => {
                    //         connection.map((users) => {

                    //         })
                    //     })
                    // })
                })
            }


            //                 // const filteredFriends = searchedUsers.filter(user => {
            //                 //     return user.userId !== parseInt(sessionStorage.getItem("activeUser")) && friend.otherUserId !== parseInt(sessionStora)
            //                 // })
            //             })
            //     })
            else if (event.target.id.split("--")[0] === "add-friend") {
                const activeUser = parseInt(sessionStorage.getItem("activeUser"))
                const otherUserId = parseInt(event.target.id.split("--")[1])
                const friendUsername = document.querySelector(`#friend-username--${otherUserId}`).textContent

                const newFriendObj = {
                    userId: activeUser,
                    otherUserId: otherUserId
                }
                friendsData.addNewFriend(newFriendObj)
                    .then(() => {
                        const newFriendCard = document.querySelector(`#friendCard--${otherUserId}`)
                        newFriendCard.innerHTML = friendsFactory.newFriendCard(friendUsername)
                    })
            }
        }
        )
    },
    invokeAllFriendsFunctions() {
        this.addEventListenerToAddFriendBtn()
    }
}

export default friendsMain