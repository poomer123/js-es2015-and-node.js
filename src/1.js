console.log('Arrow Function เขียนฟังก์ชั่นแบบใหม่ สั้น กระชับกว่า')

var greet = function(name, message) {
    return message + name
}

var arrowGreet = (name, message) => {
    return message + name
}

var arrowGreet2 = (name, message) => message + name

var arrowGreet3 = message => message

var square = x => x * x


var person = {
    name: 'Luna',

    handleMessage: function(message, handler) {
        handler(message)
    },

    greet: function() {
        this.handleMessage('Hi', message => console.log(message + this.name))
    }
}


person.greet()