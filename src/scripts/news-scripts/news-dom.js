import newsFactory from "./news-factory"

const renderNewsToDom = {
    renderAddNewsForm() {
        const newsContainer = document.querySelector("#newsFormContainer")
        newsContainer.innerHTML = newsFactory.newNewsFormHtml()
    },
    renderNewsToDom(htmlString) {
        const newsContainer = document.querySelector("#newsCardsContainer")
        newsContainer.innerHTML += htmlString
    },
    renderNewsEditForm(newsObj) {
        const editNewsCard = document.querySelector(`#newsCard--${newsObj.id}`)
        editNewsCard.innerHTML = newsFactory.editNewsHtml(newsObj)
    }
}

export default renderNewsToDom