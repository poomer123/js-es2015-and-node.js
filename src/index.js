// const box = new Promise((resolve, reject) => {
//     resolve('a')
// })

const box = Promise.resolve('A')

box
    .then(
        e => {
            console.warn(e)
            throw 'Error'
        }
    )
    .catch(e => console.error(e))
    .then(e => console.warn('Final'))


const box2 = Promise.reject('Error Top')
box2
    .then(
        e => {
            console.warn(e)
            throw 'Error'
        }, e => {
            console.warn('2rd Handle')
        }
    )
    .catch(e => console.error(e))
    .then(e => console.warn('Final 2'))