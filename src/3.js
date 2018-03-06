const color = "red"
const age = 2

function bark() {
    console.warn("Hong")
}

const dog = {color: color, age: age, bark: bark}

dog.bark()

const dog1 = {color, age, bark}
dog1.bark()



const doBark = "ba" + "rk"
const dog2 = {
    color: function() {
        console.warn("red red")
    },
    age,
    [doBark]: function() {
        console.warn('Hong Hong Hong')
    }
}
dog2.color()
dog2.bark()


