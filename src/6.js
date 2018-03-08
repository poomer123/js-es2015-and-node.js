import { EAFNOSUPPORT } from "constants";

const array = [1, 2]
const a = array[0]
const b = array[1]

console.log(a, b)


const [c, d] = array
console.log(c, d)


const person = {first: 'Jane', last: 'Doe'}
const f = person.first
const l = person.last
console.log(f, l)

const {first: newf, last: newl} = person
console.log(newf, newl)


const oneToFive = [1,2,3,4,5]
const [a1,b1,,c1] = oneToFive
console.log(a1, b1, c1)


const personDetail = {
    first: 'Jane',
    last: 'Doe',
    email: 'jane@doe.com',
    brithday: {
        day: 20,
        month: 'Jan',
        year: 1990
    }
}
const {first: fPerson, email: ePerson} = personDetail
console.log(fPerson, ePerson)

const {first, email} = personDetail
console.log(first, email)

const arr = [1, 2, 3, 4, 5]
const [arr1, arr2, ...rest] = arr
console.log(rest)



function createUser() {
    return {name: 'Luna', age: 2}
}
const {name, age} = createUser()
console.log(name, age)