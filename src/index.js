const arr = ['banana', 'apple', 'mango']

const newArr = [
    'durian',
    ...arr,
    'orange',
]
console.warn(newArr)


const newArr1 = [
    ...arr.slice(0, 1),
    'strawberry',
    ...arr.slice(1)
]
console.warn(newArr1)
console.warn(arr)


const newArr2 = [
    ...arr.slice(0, 1),
    ...arr.slice(2)
]
console.warn(newArr2)