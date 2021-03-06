const newsFactory = {
    newNewsFormHtml() {
        return `
        <fieldset id="new-news-form">
            <input id="news-title" type="text" placeholder="Title">
            <input id="news-synopsis" type="text" placeholder="Synopsis">
            <input id="news-url" type="url" placeholder="URL">
            <input id="news-date" type="date">
            <button id="save-news-btn">Save New Article</button>
            <button id="cancel-news-btn">Cancel</button>
        </fieldset>
        `
    },
    newsCardHtml(newsObj) {
        return `
        <div id="newsCard--${newsObj.id}">
            <h2>${newsObj.news_title}</h2>
            <p> ${newsObj.news_synopsis}</p>
            <a href="${newsObj.news_url}">Read More</a>
            <p>${newsObj.news_date}</p>
            <p>${newsObj.news_time}</p>
            <button id="edit-news-btn--${newsObj.id}">Edit</button>
            <button id="delete-news-btn--${newsObj.id}">Delete</button>
        </div>
        `
    },
    editNewsHtml(newsObj) {
        return `
        <fieldset id="new-news-form">
        <input id="edit-news-title" type="text" value="${newsObj.news_title}">
        <input id="edit-news-synopsis" type="text" value="${newsObj.news_synopsis}">
        <input id="edit-news-url"" type="text" value="${newsObj.news_url}">
        <input id="edit-news-date"" type="date" value="${newsObj.news_date}">
        <button id="save-news-edits-btn--${newsObj.id}">Save Changes</button>
    </fieldset>`
    },
    rerenderAddNewsBtn() {
        return `
        <button id="add-news-btn">Add New Article</button>`
    }
}

export default newsFactory