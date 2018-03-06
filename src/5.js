const arr = [4,5,6]
const append = [1,2,3, ...arr]

console.warn(append)


const arr1 = ['a', 'b', 'c']
const arr2 = ['d', 'e', 'f']
arr1.push(...arr2)
console.warn(arr1)


const arr3 = [1,2,3]
const copy = arr3.slice()
console.warn(copy)
copy.push(4)
console.warn(arr3)
console.warn(copy)



function add(x,y,z) {
    return x+y+z
}


const numbers = [1,2,3]
const sum = add(1,2,3)
console.log(sum)


const sum1 = add(...numbers)
console.log(sum1)

// Rest params
function howManyArgs(...args) {
    console.log(args.length)
    console.log(args)
}
howManyArgs()
howManyArgs(4)
howManyArgs(4,5)


function multiply(multiplier, ...array5) {
    console.log(multiplier)
    console.log(array5)
    return array5.map(e => multiplier * e)
}
const result = multiply(2, 100, 200, 300)
console.log(result)