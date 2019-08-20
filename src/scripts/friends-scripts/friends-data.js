const friendsData = {
    getAllUsers() {
        const activeUser = parseInt(sessionStorage.getItem("activeUser"))
        return fetch(`http://localhost:8088/users?id_ne=${activeUser}`)
            .then(users => users.json())
    }
}

export default friendsData