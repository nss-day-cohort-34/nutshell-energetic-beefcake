const eventsFactory = {
    newEventFormHtml() {
        return `
        <fieldset id="new-event-form">
            <input id="event-name" type="text" placeholder="Event Name">
            <input id="event-date" type="date" placeholder="Date">
            <input id="event-location"" type="text" placeholder="Location">
            <button id="save-event-btn">Save New Event!</button>
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
    editEventHtml() {

    }
}

export default eventsFactory