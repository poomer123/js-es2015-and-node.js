const arr = [10, 20, 30]

const rs = arr.filter( e => e > 10)
console.log(rs)

const rs1 = arr.filter( e => e !== 20)
console.log(rs1)


const food = [
    {id: 1, name: 'Kaprao', cal: 1000},
    {id: 2, name: 'Salad', cal: 500},
    {id: 3, name: 'Radna', cal: 1400},
    {id: 4, name: 'Soup', cal: 700},
    {id: 5, name: 'Fried Chicken', cal: 1200},
]

const isNotSalad = e => e.name !== 'Salad'
const result = food
    .filter( e => e.cal < 1000)
    .filter(isNotSalad)
console.log(result)

