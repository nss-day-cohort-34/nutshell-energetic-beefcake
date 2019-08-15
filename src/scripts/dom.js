import factoryFunctions from "./factory.js";

const renderToDom = {
  renderWelcomeToDom() {
    const overallContainer = document.querySelector("#container")
    overallContainer.innerHTML = factoryFunctions.welcomePageHtmlRep()
  },
  renderRegisterToDom() {
    const overallContainer = document.querySelector("#container")
    overallContainer.innerHTML = factoryFunctions.registerHtmlRep()
  },
  renderLoginToDom() {
    const overallContainer = document.querySelector("#container")
    overallContainer.innerHTML = factoryFunctions.loginHtmlRep()
  },
  renderDashboardToDom() {
    const overallContainer = document.querySelector("#container")
    overallContainer.innerHTML = factoryFunctions.dashboardHtmlRep()
  }
}

export default renderToDom