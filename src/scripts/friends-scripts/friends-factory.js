const friendsFactory = {
    allUsers(userObj) {
        return `
            <div id="friendCard--${userObj.id}">
                <h3 id="friend-username--${userObj.id}">${userObj.username}</h3>
                <button id="add-friend--${userObj.id}">Add Friend</button>
            </div>
        `
    },
    searchForFriendsHtml() {
        return `
        <input id="search-for-friends" placeholder="Search for Friends">
        `
    },
    newFriendCard(stringUsername) {
        return `
        <h3>${stringUsername}</h3>
        <p>You're less alone! <i class="fa fa-check"></i></p>
        `
    }
}

export default friendsFactory