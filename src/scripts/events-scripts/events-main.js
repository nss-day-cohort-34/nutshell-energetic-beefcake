import eventsFactory from "./events-factory"
import renderEventsToDom from "./events-dom"
import eventsData from "./events-data"

const eventsMain = {
    addEventListenerToAddEventButton() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id === "add-event-btn") {
                renderEventsToDom.renderAddEventForm()
            }
        })
    },
    saveNewEvent() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id === "save-event-btn") {
                const newEventName = document.querySelector("#event-name").value
                const newEventDate = document.querySelector("#event-date").value
                const newEventLocation = document.querySelector("#event-location").value

                if (newEventDate !== "" && newEventName !== "" && newEventLocation !== "") {
                    let activeUser = sessionStorage.getItem("activeUser")

                    const newEventObj = {
                        event_name: newEventName,
                        event_date: newEventDate,
                        event_location: newEventLocation,
                        userId: activeUser
                    }
                    eventsData.postNewEvent(newEventObj)
                        .then(eventsData.getEvents)
                        .then(allEvents => {
                            document.querySelector("#eventCardsContainer").innerHTML = ""
                            allEvents.forEach(event => {
                                const eventHtml = eventsFactory.eventCardHtml(event)
                                renderEventsToDom.renderEventsToDom(eventHtml)
                            })
                        })
                    //CODE BELOW CAUSING WEBPACK-RELATED BUGS
                    document.querySelector("#event-date").value = ""
                    document.querySelector("#event-location").value = ""
                    document.querySelector("#event-name").value = ""
                }
                else {
                    alert("fill out the form right! it ain't that hard! is it?!")
                }
            }
        })
    },
    // STARTED CODING DELETE FUNCTIONALITY BELOW
    deleteEvent() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id.split("--")[0] === "delete-event-btn") {
                const eventId = event.target.id.split("--")[1]
                eventsData.deleteEvent(eventId)
                    .then(eventsData.getEvents)
                    .then(allEvents => {
                        document.querySelector("#eventCardsContainer").innerHTML = ""
                        allEvents.forEach(event => {
                            const eventHtml = eventsFactory.eventCardHtml(event)
                            renderEventsToDom.renderEventsToDom(eventHtml)
                        })
                    })

            }
        })
    },
    editEvent() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id.split("--")[0] === "edit-event-btn") {
                const eventId = event.target.id.split("--")[1]
                eventsData.getSingleEvent(eventId)
                    .then((eventObj) => {
                        console.log(eventObj.id)
                        renderEventsToDom.renderEditForm(eventObj)
                    })
            }
            else if (event.target.id.split("--")[0] === "save-event-edits-btn") {
                const editNameFeild = document.querySelector("#edit-event-name").value
                const editDateFeild = document.querySelector("#edit-event-date").value
                const editLocationFeild = document.querySelector("#edit-event-location").value
                const eventId = event.target.id.split("--")[1]
                const updatedEvent = {
                    event_name: editNameFeild,
                    event_date: editDateFeild,
                    event_location: editLocationFeild,
                    id: eventId
                }
                eventsData.editEvent(updatedEvent).then(this.displayAllEvents)
            }
        })
    },


    displayAllEvents() {
        eventsData.getEvents()
            .then(allEvents => {
                document.querySelector("#eventCardsContainer").innerHTML = ""
                allEvents.forEach(event => {
                    const eventHtml = eventsFactory.eventCardHtml(event)
                    renderEventsToDom.renderEventsToDom(eventHtml)
                })
            })
    }
}

export default eventsMain