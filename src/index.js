const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(e => {
        if(! e.ok) {
            throw 'error'
        }
        console.warn(e)
        return e.json()
    })
    .then(e => {
        console.warn(e)
    })
    .catch(e => {
        console.error(e)
    })



const singleURL = 'https://jsonplaceholder.typicode.com/user'
// POST JSON
fetch('/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Hubot',
        login: 'hubot',
    }),
    credentials: 'same-origin'
})