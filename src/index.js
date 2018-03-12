// promise = value, future value.
const a = 'A'

const ap = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('a')
    }, 1000)
})

console.warn(a)
console.warn(ap)


ap.then( e => {
    console.warn(e)
    return `My value is : ${e}`
})
.then( e => {
    console.warn(e)
})
.catch(e => {
    console.error(e)
})


function loadNewsP() {
    const news = new Promise((resolve) => {
        setTimeout(() => {
            resolve(
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
    })
    return news
}

function validate(rs) {
    console.warn('validate')
    return rs
}

function sorting(rs) {
    console.warn('sorting')
    return rs
}

const newsP = loadNewsP()
    .then(validate)
    .then(sorting)
    .then( e => {
        console.log(e)
    })