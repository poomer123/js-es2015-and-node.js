const array = ['one', 'two', 'three']

for(var i =0; i < array.length; i++) {
    console.warn(array[i])
}

array.forEach(e => {
    console.warn(e)
})

for ( const v of array) {
    if(v === 'two') {
        continue
    }
    console.warn(v)
}