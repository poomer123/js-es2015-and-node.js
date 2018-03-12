function loadNews(callback) {
    setTimeout(() => {
        callback(
            [
                {id: 1, title: 'a'},
                {id: 2, title: 'b'},
                {id: 3, title: 'c'},
                {id: 4, title: 'd'},
                {id: 5, title: 'e'},
                {id: 6, title: 'f'},
                {id: 7, title: 'g'},
                {id: 8, title: 'h'},
            ]
        )
    }, 1000)
}

loadNews( function(rs){
    console.warn(rs)
})
console.warn('Not blocking')


// callback hell
// loadNews(function(rs){
//     validateNews(rs, function(news) {
//         sortByLatest(news, function(latest) {
//             trimLates5News(latest, function(final) {
//                 console.log('final')
//                 console.log(final)
//             })
//         })
//     })
// })
// console.warn('Not blocking 2')

