
const API = {
  saveNewUser(newUserObj) {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUserObj)
    })
    .then(newUser => newUser.json())
  },
  getAllUsersData() {
    return fetch("http://localhost:8088/users")
    .then(data => data.json())
  }
}

export default API