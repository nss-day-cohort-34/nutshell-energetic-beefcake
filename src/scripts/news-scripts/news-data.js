const newsData = {
    postNewNews(newsObj) {
        return fetch("http://localhost:8088/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newsObj)
        })
            .then(newNews => newNews.json())
    },
    getNews(userId) {
        return fetch(`http://localhost:8088/news?_sort=news_date&_order=desc&userId=${userId}`)
            .then(news => news.json())
    },
    deleteNews(id) {
        return fetch(`http://localhost:8088/news/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },

        })
            .then(newNews => newNews.json())
    },
    editNews(newsObj) {
        return fetch(`http://localhost:8088/news/${newsObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newsObj)
        })
    },
    getSingleNews(id) {
        return fetch(`http://localhost:8088/news/${id}`)
            .then(news => news.json())
    }
}

export default newsData