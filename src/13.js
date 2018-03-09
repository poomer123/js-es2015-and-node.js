const array = [1, 4, 8, 10, 8, 11, 12]

const index = array.indexOf(8)
console.warn(index)

const index1 = array.indexOf(7)
console.warn(index1)


const found = array.find(e => e === 8)
console.warn(found)


const found1 = array.find(e => e % 4 === 0)
console.warn(found1)

const found2 = array.findIndex(e => e % 4 === 0)
console.warn(found2)


const c = [
    {name: 'Luna'},
    {name: 'Lulu'},
]

const theindex = c.indexOf({name: 'Luna'})
console.warn(theindex)


const thefound = c.find(e => e.name === 'Luna')
console.warn(thefound)

const thefound1 = c.findIndex(e => e.name === 'Luna')
console.warn(thefound1)