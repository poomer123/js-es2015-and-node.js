const arr = [10, 20, 30]

const map = arr.map(e => 1)
console.log(map)


const reduce = arr.reduce( (ret, e, i) => {
    console.warn(i, ret, e)
    const sum = ret + e
    return sum
}, 0)

console.log(reduce)


const reduce1 = arr
    .filter(e => e !== 20 )
    .reduce( (ret, e) => ret + e, 0)


console.log(reduce1)


const food = [
    {id: 1, name: 'Kaprao', cal: 1000},
    {id: 2, name: 'Salad', cal: 500},
    {id: 3, name: 'Radna', cal: 1400},
    {id: 4, name: 'Soup', cal: 700},
    {id: 5, name: 'Fried Chicken', cal: 1200},
]


const isNotHealthy = e => e.cal >= 1000

const sumCal = food
    .filter(isNotHealthy)
    .map( e => e.cal)
    .reduce((ret, e) => {
        return ret + e
    }, 0)


console.log(sumCal)



const orders = [
    {id: 1, name: 'Kaprao', cal: 1000},
    {id: 2, name: 'Salad', cal: 500},
    {id: 3, name: 'Radna', cal: 1400},
    {id: 4, name: 'Kaprao', cal: 1000},
    {id: 5, name: 'Radna', cal: 1400},
    {id: 6, name: 'Kaprao', cal: 1000},
]

const summary = orders
    .reduce((object, element) => {
        if( element.name in object) {
            object[element.name]++
        } else {
            object[element.name] = 1
        }
        return object
    }, {})

console.log(summary)