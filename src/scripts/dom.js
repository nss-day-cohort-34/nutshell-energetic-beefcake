import factoryFunctions from "./factory.js";
import tasksMain from "./tasks-scripts/tasks-main.js"
import newsMain from "./news-scripts/news-main.js";

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
    tasksMain.displayIncompleteTasks()
    newsMain.displayAllNews()
  }
}

export default renderToDom