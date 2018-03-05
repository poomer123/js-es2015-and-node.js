console.log('let - const การประกาศตัวแปรแบบทันสมัย เลิกใช้ var!')

var name = "Luna"

if (true) {
 var name = "Ken"
}
console.log(name)

function a() {
    var name = "Ko"
}
console.log(name)



let name1 = "Zo"
if(true) {
    let name1 = "Zoho"
}
console.log(name1)


var stack = []

for (let i=0; i<10; i++) {
    stack.push(function(){
        console.log(i)
    })
}

stack.forEach(function(f) {
    f()
})


const fruit = 'Banana' 
{
    const fruit = 'Apple'
}
console.warn(fruit);

const person = {}
person.name = 'Luna'