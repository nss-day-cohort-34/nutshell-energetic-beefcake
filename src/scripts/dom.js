import factoryFunctions from "./factory.js";

const renderToDom = {
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