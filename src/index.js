const array = [1, 2, 3]
console.log(array.join())
console.log(array.join(','))
console.log(array.join('-'))



const fourToSix = [4, 5, 6]
const oneToSix = array.concat(fourToSix)
console.warn(oneToSix)
console.warn(array)


const oneToSeven = oneToSix.concat([7])
console.warn(oneToSeven)

const mutate = ['red', 'green']
const conut = mutate.push('blue')
console.warn(mutate)
console.warn(conut)


const pop = mutate.pop()
console.warn(mutate)
console.warn(pop)

const shift = mutate.shift()
console.warn(mutate)
console.warn(shift)


const unshift = mutate.unshift('red')
console.warn(mutate)
console.warn(unshift)


const mutate1 = ['red', 'green', '0', '1', 'blue']
const spliced = mutate1.splice(2, 2, 'white', 'pink')
console.warn(mutate1)
console.warn(spliced)

const mutate2 = ['red', 'green', '0', '1', 'blue']
const sliced = mutate2.slice(1)
console.warn(sliced)
console.warn(mutate2)