import renderToDom from "./dom.js";
import API from "./data.js"

const overallContainer = document.querySelector("#container")

renderToDom.renderWelcomeToDom()
overallContainer.addEventListener("click", () => {
  if (event.target.id === "welcome-register") {
    renderToDom.renderRegisterToDom()
  } else if (event.target.id === "welcome-login") {
    renderToDom.renderLoginToDom()
  }
})

overallContainer.addEventListener("click", () => {
  if (event.target.id === "register-btn") {
    const firstName = document.querySelector("#register-firstname").value
    const lastName = document.querySelector("#register-lastname").value
    const email = document.querySelector("#register-email").value
    const username = document.querySelector("#register-username").value
    const password = document.querySelector("#register-password").value
    const newUserObj = {
      username: username,
      full_name: `${firstName} ${lastName}`,
      email: email,
      password: password
    }
    // get array of users (objects)
    // iterate over array to check to see if the username or email already exists
    // if not, create new user and save
    // if exist, alert the user
    // API.getAllUsersData()
    //   .then(usersArr => {
    //     usersArr.forEach(userObj => {
    //       if (userObj.username === newUserObj.username || userObj.email === newUserObj.email) {
    //         alert("NOPE")
    //       } else {
            API.saveNewUser(newUserObj)
              .then(newRegisteredUserObj => {
                sessionStorage.setItem("activeUser", newRegisteredUserObj.id)
                renderToDom.renderDashboardToDom()
              // })
          // }
        // })
      })
  } else if (event.target.id === "login-btn") {
    const username = document.querySelector("#login-username").value
    const password = document.querySelector("#login-password").value
    API.getAllUsersData()
      .then(usersArr => {
        console.log(usersArr)
        usersArr.forEach(userObj => {
          if (userObj.username === username && userObj.password === password) {
            renderToDom.renderDashboardToDom()
            sessionStorage.setItem("activeUser", userObj.id)
          }
        })
      })
  }
  if (event.target.id === "logout-btn") {
    renderToDom.renderWelcomeToDom()
    sessionStorage.removeItem("activeUser")
  }
})
