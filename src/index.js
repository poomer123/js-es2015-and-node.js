const array = [1, 2, 3]


const result = []
for (let i=0; i<array.length; i++) {
    const a = array[i] * 2
    result.push(a)
}
console.warn(result)
console.warn(array)



const result1 = []
array.forEach( e => {
    const a = e * 2
    result1.push(a)
})
console.warn(result1)
console.warn(array)




for (let i=0; i<array.length; i++) {
    array[i] = array[i] * 2
}
console.warn(array)




const arr = [1, 2, 3]
const rs = arr.map( e => e * 2 )
console.log(rs)

const multipyBy4 = e => e * 4
const rs1 = arr.map(multipyBy4)
console.log(rs1)


const rs2 = arr
    .map(e => e * 2)
    .map(multipyBy4)

console.log(rs2)
console.log(arr)