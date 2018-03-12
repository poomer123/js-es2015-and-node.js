class Book {

    // constructor () {
    //     this.state = "Opened"
    // }

    // Property initializer syntax
    // Constructor state
    // state = "Opened"

    // Bound function (Bind)
    // whatIsState = () => {
    //     return this.state
    // }

    // Normal method
    // normalMethod() {
    //     //
    // }

    // Static class properties
    // static staticProperty = 'babelIsCool'
    // static staticFunction() {
    //     return Book.staticProperty
    // }
}


const b = new Book
const whatIsState = b.whatIsState
// console.warn(book.staticProperty)


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


async function run() {
    const newsP = await loadNewsP()
    const validate = await validate(newsP)
    const sorted = await sorting(validate)
    // .then(validate)
    // .then(sorting)

    return sorted
}

run()
    .then( e => {
        console.log(e)
    })


// Object rest/spread
const {a, ...rest} = {a:'1', b:'2', c:'3'}

console.warn(rest)

const n = {a, ...rest}
console.warn(n)
