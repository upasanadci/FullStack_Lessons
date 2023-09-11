import express from "express" 
// import middleware here 

const app = express()
const PORT = 5000

// settings here for app.use()

// task 1: create a custom middleware who can display time when we go localhost:5000
app.use((req, res, next)=>{
    // todo: now try to show "Today is 17.07.2023 and time is 14.00am"
    next()
})
app.get('/', (req, res)=>{
    res.end(' This is from end() response')
})


// task 02: create functions call middleware1, middleware2, middleware3 who can display 3 different messages as middleware and the route can use it
const middleware1 = (req, res, next)=>{
    res.write(' I am middleware 1')
    next()
}

const middleware2 = (req, res, next)=>{
    // your code here
    next()
}

const middleware3 = (req, res, next)=>{
    res.write(' I am middleware 3')
    // find the missing part
}

app.use(middleware1, middleware2, middleware3)
app.get('/middlewares', (req, res)=>{
    res.end(' Chains of middlewares end here')
})

// task 03: create a middleware which can can store some data for next process and send it to next process
const process1 = (req, res, next) =>{
    // todo: store this message: "some data we store here in request"
    next()
}
app.get('/getdataFromMiddleware', process1, (req, res)=>{
    // todo: get the message from process1 middleware here
    res.end('The data from process1 is: ')
})

// task 04: create a middleware which can take 2 numbers and calculate multiplication of them and send back result to the final response and display it
// todo: use req.body and express.json() middleware
const calculateMiddleware = (req, res, next) =>{
    // your code here
}
app.get('/multiplication', calculateMiddleware, (req, res)=>{
    // todo: find missing part and uncomment next code to test
    //res.end(' The result is: '+ req.result)
})

// task 05: do task 4 again by using req.params
const calculateMiddleware2 = (req, res, next) =>{
    // your code here
}
app.get('/multiplication/:number1/:number2', calculateMiddleware2, (req, res)=>{
    // todo: find missing part and uncomment next code to test
    //res.end(' The result is: '+ req.result)
})

/*** 
 * task 6: comment all task you did before to ignore errors. 
 * Then make a permission middleware which can check if you are logged in or out
 ***/
// add middleware in route
app.get('/loginCheck', (req, res)=>{
    res.json('You are successfully logged in! enjoy')
})

/***
 * task 7: make a middleware which can get data from this api: https://jsonplaceholder.typicode.com/users
 * save the array inside middleware by using req.somevariable = data
 * make a route which can get this data 
 * now get userid from re.params and check if array have this id or not
 */

app.get('/users/:userid', (req, res)=>{
    // your code here   
})

app.listen(PORT, () => console.log(`My server is running on Port ${PORT}`))