const eventsData = {
    postNewEvent(eventObj) {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
            .then(newEvent => newEvent.json())
    },
    getEvents() {
        return fetch("http://localhost:8088/events")
            .then(events => events.json())
    },
    deleteEvent(id) {
        return fetch(`http://localhost:8088/events/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },

        })
            .then(newEvent => newEvent.json())
    },
    editEvent(eventObj, id) {
        return fetch(`http://localhost:8088/events/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
    }
}

export default eventsData