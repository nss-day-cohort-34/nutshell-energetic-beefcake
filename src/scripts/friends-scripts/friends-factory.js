const friendsFactory = {
    allUsers(userObj) {
        return `
            <h3>${userObj.username}</h3>
            <button id="add-friend">Add Friend</button>
        `
    },
    searchForFriendsHtml() {
        return `
        <input id="search-for-friends" placeholder="Search for Friends">
        `
    }
}

export default friendsFactory