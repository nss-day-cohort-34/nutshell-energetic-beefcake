const eventsFactory = {
    newEventFormHtml() {
        return `
        <h2>Events</h2>
        <fieldset id="new-event-form">
            <input id="event-name" type="text" placeholder="Event Name">
            <input id="event-date" type="date" placeholder="Date">
            <input id="event-location"" type="text" placeholder="Location">
            <button id="save-event-btn">Save New Event!</button>
        </fieldset>
        <div id="eventCardsContainer"></div>
        `
    },
    eventCardHtml(eventObj) {
        return `
        <div id="eventCard--${eventObj.id}">
            <h1>${eventObj.event_name}</h1>
            <date>${eventObj.event_date}</date>
            <h2>${eventObj.event_location}</h2>
            <button id="edit-event-btn--${eventObj.id}">Edit Event!</button> 
            <button id="delete-event-btn--${eventObj.id}">Delete Event!</button> 
        </div>
        `
    },
    editEventHtml() {

    }
}

export default eventsFactory