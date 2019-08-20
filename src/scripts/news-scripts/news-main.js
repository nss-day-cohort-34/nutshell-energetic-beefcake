import newsFactory from "./news-factory"
import renderNewsToDom from "./news-dom"
import newsData from "./news-data"

const newsMain = {
    addEventListenerToAddNewsButton() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id === "add-news-btn") {
                renderNewsToDom.renderAddNewsForm()
            }
        })
    },
    saveNewNews() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id === "save-news-btn") {
                const newNewsTitle = document.querySelector("#news-title").value
                const newNewsSynopsis = document.querySelector("#news-synopsis").value
                const newNewsUrl = document.querySelector("#news-url").value
                const newNewsDate = document.querySelector("#news-date").value
                const newsTime = new Date()
                if (newNewsSynopsis !== "" && newNewsTitle !== "" && newNewsUrl !== "") {
                    const activeUser = parseInt(sessionStorage.getItem("activeUser"))

                    const newNewsObj = {
                        news_title: newNewsTitle,
                        news_synopsis: newNewsSynopsis,
                        news_url: newNewsUrl,
                        news_date: newNewsDate,
                        news_time: newsTime.toLocaleTimeString(),
                        userId: activeUser
                    }
                    newsData.postNewNews(newNewsObj)
                        .then(this.displayAllNews)
                        // .then(allNews => {
                        //     document.querySelector("#newsCardsContainer").innerHTML = ""
                        //     allNews.forEach(news => {
                        //         const newsHtml = newsFactory.newsCardHtml(news)
                        //         renderNewsToDom.renderNewsToDom(newsHtml)
                        //     })
                        // })
                }
                else {
                    alert("fill out the form right! it ain't that hard! is it?!")
                }
            }
        })
    },
    // STARTED CODING DELETE FUNCTIONALITY BELOW
    deleteNews() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id.includes("delete-news-btn")) {
                const newsId = event.target.id.split("--")[1]
                newsData.deleteNews(newsId)
                    .then(this.displayAllNews)
                    // .then(allNews => {
                    //     document.querySelector("#newsCardsContainer").innerHTML = ""
                    //     allNews.forEach(news => {
                    //         const newsHtml = newsFactory.newsCardHtml(news)
                    //         renderNewsToDom.renderNewsToDom(newsHtml)
                    //     })
                    // })

            }
        })
    },
    editNews() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id.split("--")[0] === "edit-news-btn") {
                const newsId = event.target.id.split("--")[1]
                newsData.getSingleNews(newsId)
                    .then((newsObj) => {
                        renderNewsToDom.renderNewsEditForm(newsObj)
                    })
            }
            else if (event.target.id.split("--")[0] === "save-news-edits-btn") {
                const editTitleFeild = document.querySelector("#edit-news-title").value
                const editSynopsisFeild = document.querySelector("#edit-news-synopsis").value
                const editUrlFeild = document.querySelector("#edit-news-url").value
                const newsId = event.target.id.split("--")[1]
                const editNewsDate = document.querySelector("#edit-news-date").value
                const editNewsTime = new Date()
                const  activeUser = parseInt(sessionStorage.getItem("activeUser"))
                const updatedNews = {
                    news_title: editTitleFeild,
                    news_synopsis: editSynopsisFeild,
                    news_url: editUrlFeild,
                    news_date: editNewsDate,
                    news_time: editNewsTime.toLocaleTimeString(),
                    userId: activeUser,
                    id: newsId
                }
                newsData.editNews(updatedNews).then(this.displayAllNews)
            }
        })
    },


    displayAllNews() {
        const  activeUser = parseInt(sessionStorage.getItem("activeUser"))
        newsData.getNews(activeUser)
            .then(allNews => {
                document.querySelector("#newsCardsContainer").innerHTML = ""
                allNews.forEach(news => {
                    const newsHtml = newsFactory.newsCardHtml(news)
                    renderNewsToDom.renderNewsToDom(newsHtml)
                })
            })
        },
        invokeAllNewsFunctions() {
            this.addEventListenerToAddNewsButton()
            this.saveNewNews()
            this.deleteNews()
            this.editNews()
            this.displayAllNews()
        }
    }
export default newsMain