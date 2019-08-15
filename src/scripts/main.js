import renderToDom from "./dom.js";
import API from "./data.js"

const overallContainer = document.querySelector("#container")
const loginBtn = document.querySelector("#login-btn")

renderToDom.renderLoginToDom()
const loginContainer = document.querySelector("#login-and-registration-container")

overallContainer.addEventListener("click", ()=> {
  if (event.target.id === "register-btn") {
    loginContainer.classList.add("hideLoginAndRegistration")
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
    API.saveNewUser(newUserObj)
    // renderToDom.renderDashboardToDom()
  }
})
