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
            else if (event.target.id === "upcoming-event-btn"){
                this.displayUpcomingEvents()
            }
            else if (event.target.id === "past-event-btn") {
                this.displayPastEvents()
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
                const eventBTNContainer = document.querySelector("#eventFormContainer")

                if (newEventDate !== "" && newEventName !== "" && newEventLocation !== "") {
                    const activeUser = parseInt(sessionStorage.getItem("activeUser"))

                    const newEventObj = {
                        event_name: newEventName,
                        event_date: newEventDate,
                        event_location: newEventLocation,
                        userId: activeUser
                    }
                    eventBTNContainer.innerHTML = eventsFactory.filterBtns()
                    eventsData.postNewEvent(newEventObj)
                        .then(this.displayUpcomingEvents)
                }
                else {
                    alert("fill out the form right! it ain't that hard! is it?!")
                }
            }
            else if (event.target.id === "cancel-event-btn") {
                const eventBTNContainer = document.querySelector("#eventFormContainer")
                eventBTNContainer.innerHTML = eventsFactory.filterBtns()
            }
        })
    },



    deleteEvent() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id.split("--")[0] === "delete-event-btn") {
                const eventId = event.target.id.split("--")[1]
                eventsData.deleteEvent(eventId)
                    .then(this.displayUpcomingEvents)



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
            eventsData.editEvent(updatedEvent).then(this.displayUpcomingEvents)
        }
    })
},


displayUpcomingEvents() {
    const activeUserID = parseInt(sessionStorage.getItem("activeUser"))
    eventsData.getEvents(activeUserID)
        .then(allEvents => {
            document.querySelector("#eventCardsContainer").innerHTML = ""
            const upcomingEvents = allEvents.filter(eventObj => {
                const currentDate = new Date()
                const eventDate = new Date(eventObj.event_date)
                return eventDate > currentDate
            })
            upcomingEvents.forEach(event => {
                const eventHtml = eventsFactory.eventCardHtml(event)
                renderEventsToDom.renderEventsToDom(eventHtml)
            })
        })
},

displayPastEvents() {
    const activeUserID = parseInt(sessionStorage.getItem("activeUser"))
    eventsData.getEvents(activeUserID)
        .then(allEvents => {
            document.querySelector("#eventCardsContainer").innerHTML = ""
            const pastEvents = allEvents.filter(eventObj => {
                const currentDate = new Date()
                const eventDate = new Date(eventObj.event_date)
                return currentDate > eventDate
            })
            pastEvents.forEach(event => {
                const eventHtml = eventsFactory.eventCardHtml(event)
                renderEventsToDom.renderEventsToDom(eventHtml)
            })
        })
}

}

export default eventsMain