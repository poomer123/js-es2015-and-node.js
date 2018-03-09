const array = [-1, 4, 7, 8, 10 ,11, 16]

const test = array.every(e => e > 0)
console.warn(test)


const test1 = array.every(e => e > 10)
console.warn(test1)


const test2 = array.some(e => e > 0)
console.warn(test2)


const arr = [
    {
        id: 1, name: 'Luna', color: 'Brown', breed: 'Pug',
    },
    {
        id: 2, name: 'Lulu', color: 'Black', breed: 'Hong',
    }
]

const dog = arr.every(e => e.name === 'Luna')
console.log(dog)


const dog1 = arr.some(e => e.name === 'Luna')
console.log(dog1)