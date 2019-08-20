const eventsFactory = {
    newEventFormHtml() {
        return `
        <fieldset id="new-event-form">
            <input id="event-name" type="text" placeholder="Event Name">
            <input id="event-date" type="date" placeholder="Date">
            <input id="event-location"" type="text" placeholder="Location">
            <button id="save-event-btn">Save New Event!</button>
            <button id="cancel-event-btn">Cancel</button>
        </fieldset>
        `
    },
    eventCardHtml(eventObj) {
        return `
        <div id="eventCard--${eventObj.id}">
            <h2>${eventObj.event_name}</h2>
            <date>Date: ${eventObj.event_date}</date>
            <h3>Location: ${eventObj.event_location}</h3>
            <button id="edit-event-btn--${eventObj.id}">Edit Event!</button>
            <button id="delete-event-btn--${eventObj.id}">Delete Event!</button>
        </div>
        `
    },
    editEventHtml(eventObj) {
        return `
        <fieldset id="new-event-form">
        <input id="edit-event-name" type="text" value="${eventObj.event_name}">
        <input id="edit-event-date" type="date" value="${eventObj.event_date}">
        <input id="edit-event-location"" type="text" value="${eventObj.event_location}">
        <button id="save-event-edits-btn--${eventObj.id}">Save Changes!</button>
    </fieldset>`
    },

    filterBtns() {
        return `
        <button id="add-event-btn">Add New Event</button>
        <button id="upcoming-event-btn">Upcoming Event</button>
        <button id="past-event-btn">Show Pasts Event</button>`
    }
}

export default eventsFactory