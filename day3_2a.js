const users = [
    {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'17/05/2019 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'17/05/2019 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'17/05/2019 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'17/05/2019 9:50 AM',
            isLoggedIn: false
    },
    {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'17/05/2019 10:00 AM',
            isLoggedIn: false
    }
];


// a. Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user 
//that he has already an account.


function signup(user){
    let x = users.find(users => users._id == user._id)
    if (x != undefined){
        console.log("user has already an account")
    }else{
        users.push(user)
        console.log("user registered successfully")
        console.log(users)
    }
}

//b. Create a function called ***signIn*** which allows user to sign in to the application

function signin(info){
    let x = users.find(users => users.email == info.email && users.password == info.password)
    if (x == undefined){
        console.log("User does not exist")
    }else{
        x.isLoggedIn = true
        //console.log(x)
        console.log("Welcome to the application")
    }
}

signup({
    _id: 'fhderc',
    username: 'Rohan',
    email: 'rohan@gmail.com',
    password: 'Rohan3333',
    createdAt:'17/05/2011 10:00 AM',
    isLoggedIn: false
})

signin({
    email : 'martha@martha.com',
     password :'123222'
})