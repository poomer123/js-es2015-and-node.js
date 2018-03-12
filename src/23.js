const user = {
    data: [
        {name: 'T. Woods', age: 37},
        {name: 'P. Mickelson', age: 43},
    ],
    showFirstUser: function() {
        console.warn(this)
        console.warn(this.data[0].name)
    }
}

// user.showFirstUser()
const showFirstUser = user.showFirstUser.bind(user)
// top level use it's windows
showFirstUser()