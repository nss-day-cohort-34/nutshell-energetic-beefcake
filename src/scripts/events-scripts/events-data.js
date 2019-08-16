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
    }
}

export default eventsData