const user = {
    name :'HalxDocs',
    age: 17,
    isLoggedIn: true
}

if (user.isLoggedIn && user.age >= 18) {
    console.log('user log in succesfully')
}
else{
    console.log('user not logged')
}

const displayName = user && user.name || 'guest'

console.log(displayName)

const message = !user ? 'user not found login ' : !user.isLoggedIn ? 'login pls' : user.age < 18 ? 'you are to young ' : 'welcome'
console.log(message)