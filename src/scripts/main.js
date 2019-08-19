import renderToDom from "./dom.js";
import API from "./data.js"
import eventsMain from "./events-scripts/events-main.js"
import messagesMain from "./messages-scripts/messages-main"
import newsMain from "./news-scripts/news-main.js"
import tasksMain from "./tasks-scripts/tasks-main.js"

const overallContainer = document.querySelector("#container")

const activeUser = parseInt(sessionStorage.getItem("activeUser"))
if (!activeUser) { renderToDom.renderWelcomeToDom() }
else {
  renderToDom.renderDashboardToDom()
}
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
    API.getAllUsersData()
      .then(usersArr => {
        const existingUser = usersArr.find(existingUserObj => {
          return existingUserObj.username === newUserObj.username
        })
        if (existingUser) {
          alert("NOPE")
        } else if (
          firstName === ""
          || lastName === ""
          || email === ""
          || username === ""
          || password === ""
        ) {
          alert("hey! fill out our WHOLE format, dangus")
        }
        else {
          API.saveNewUser(newUserObj)
            .then(newRegisteredUserObj => {
              sessionStorage.setItem("activeUser", newRegisteredUserObj.id)
              renderToDom.renderDashboardToDom()
            })
        }
      })
  } else if (event.target.id === "login-btn") {
    const username = document.querySelector("#login-username").value
    const password = document.querySelector("#login-password").value
    API.getAllUsersData()
      .then(usersArr => {
        const userObj = usersArr.find(existingUserObj => {
          return existingUserObj.username === username && existingUserObj.password === password
        })
        if (userObj) {
          renderToDom.renderDashboardToDom()
          sessionStorage.setItem("activeUser", userObj.id)
        } else {
          const clickOk = confirm("something's gone wrong. click \"Cancel\" to try again OR \"OK\" to register as a new user")
          if (clickOk === true) {
            renderToDom.renderWelcomeToDom()
          }
        }
      })
  }
  if (event.target.id === "logout-btn") {
    renderToDom.renderWelcomeToDom()
    sessionStorage.removeItem("activeUser")
  }
})

tasksMain.invokeAllTaskFunctions()

eventsMain.addEventListenerToAddEventButton()
eventsMain.saveNewEvent()
eventsMain.deleteEvent()
eventsMain.editEvent()
messagesMain.callAllMessageMethods()
newsMain.addEventListenerToAddNewsButton()
newsMain.saveNewNews()
newsMain.deleteNews()
newsMain.editNews()

