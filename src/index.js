function howAreYou(mood) {
    if(!mood) {
        mood = 'Happy'
    }
    console.warn(mood)
}

howAreYou()


function howAreYou1(mood1 = "Mood") {
    console.warn(mood1)
}

howAreYou1()


let [x,y=2] = [1, ]
console.warn(x,y)


const {age: m, name: n='Nana'} = {age: 3, }
console.warn(n,m)


const [{ prop: p=5 }] = [{ prop: undefined }]
console.warn(p)


const [{ popup: pop=1 } = {}] = []
console.warn(pop)


function createUser(person) {
    const name = person.name || 'Nana'
    const age = person.age || 2
    return `${name} (age: ${age})`
}
console.log( createUser({}) ) 
console.log( createUser({age: 10, name: 'Lucy'}) ) 


function createUser1({age = 20, name} = {}) {
    return `${name} (age: ${age})`
}
console.log( createUser1({name: 'Jay'}) )
console.log(createUser1())

function profilePage (
    {favColor} = {favColor: 'Pink'},
    [name, age] = ['Bunny', 24]
) {
    console.warn(
        `Name: ${name}, Age: ${age}, Color: ${favColor}`
    )
}
profilePage()
profilePage({}, [])

function profilePage1 (
    {favColor = 'Red'} = {},
    [name = 'Bun', age = 24] = []
) {
    console.warn(
        `Name: ${name}, Age: ${age}, Color: ${favColor}`
    )
}
profilePage1()
profilePage1({}, [])