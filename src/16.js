const arr = [10, 20, 30]

const rs = arr.map( element => element / 2 )
console.warn(rs)


const pets = [
    {name: 'Luna'},
    {name: 'Lulu'}
]

const name = pets.map( e => e.name )
console.log(name)


const fruits = ['banana', 'apple', 'mango']
const say = fruits.map( (e, i, array) => {
    return `Day ${i+1} eat ${e}`
})
console.log(say)