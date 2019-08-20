import factoryFunctions from "./factory.js";
import tasksMain from "./tasks-scripts/tasks-main.js"
import newsMain from "./news-scripts/news-main.js";
import messagesMain from "./messages-scripts/messages-main.js";
import eventsMain from "./events-scripts/events-main.js"

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
    messagesMain.displayAllMessages()
    eventsMain.displayUpcomingEvents()
  }
}

export default renderToDom