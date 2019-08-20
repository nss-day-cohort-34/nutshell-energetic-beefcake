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
    getEvents(userId) {
        return fetch(`http://localhost:8088/events?userId=${userId}`)
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
    editEvent(eventObj) {
        return fetch(`http://localhost:8088/events/${eventObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
    },
    getSingleEvent(id) {
        return fetch(`http://localhost:8088/events/${id}`)
            .then(events => events.json())
    }
}

export default eventsData
