import eventsFactory from "./events-factory"

const renderEventsToDom = {
    renderAddEventForm() {
        const eventsContainer = document.querySelector("#eventFormContainer")
        eventsContainer.innerHTML = eventsFactory.newEventFormHtml()
    },
    renderEventsToDom(htmlString) {
        const eventsContainer = document.querySelector("#eventCardsContainer")
        eventsContainer.innerHTML += htmlString
    }
}

export default renderEventsToDom