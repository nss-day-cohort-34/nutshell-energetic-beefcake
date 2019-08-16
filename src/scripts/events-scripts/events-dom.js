import eventsFactory from "./events-factory"

const renderEventsToDom = {
    renderAddEventForm() {
        const eventsContainer = document.querySelector("#events-container")
        eventsContainer.innerHTML = eventsFactory.newEventFormHtml()
    },
    renderEventsToDom(htmlString) {
        const eventsContainer = document.querySelector("#events-container")
        eventsContainer.innerHTML += htmlString
    }
}

export default renderEventsToDom