const friendsData = {
    getAllUsers() {
        const activeUser = parseInt(sessionStorage.getItem("activeUser"))
        return fetch(`http://localhost:8088/users?id_ne=${activeUser}`)
            .then(users => users.json())
    },
    searchUsers(string) {
        const activeUser = parseInt(sessionStorage.getItem("activeUser"))
        return fetch(`http://localhost:8088/users?id_ne=${activeUser}&q=${string}`)
            .then(friends => friends.json())
    },
    addNewFriend(friendObj) {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendObj)
        })
            .then(newFriend => newFriend.json())
    },
    getAllConnections() {
        return fetch(`http://localhost:8088/friends`)
            .then(connections => connections.json())
    }
}

export default friendsData