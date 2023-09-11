import express from "express" 
import { permission } from "./middleware/permission.js"

const app = express()
const PORT = 5000

// build-in middleware
app.use(express.json()) // req.body data from a form
// 3rd-party middleware
//app.use(cors()) 

// application level middleware by me
app.use((req, res, next)=>{
    res.write('This is application level middleware')
    next()
})

/***
 * Middleware: (custom or creating by me)
 * - function
 * - parameters: req, res, next
 * - last parameters should be 'next'
 * - next means 'next process/function to go'
 */
function today(req, res, next) {
    let todayIs = new Date()
    res.write('   Today is: ' + todayIs) 
    next()
}

// normal callback function
function callBackFunc(req, res) {
    res.end('  hello DCI') // final res
}

// ROUTES
// http://localhost:5000/
app.get('/', today, callBackFunc)

// http://localhost:5000/messages
const middleware1 = (req, res, next)=>{
    res.write(' I am middleware 1')
    next() // next process/function
}

const middleware2 = (req, res, next)=>{
    res.write(' I am middleware 2')
    next()
}

const middleware3 = (req, res, next)=>{
    res.write(' I am middleware 3')
    next()
}

app.get('/messages', middleware3, middleware1, middleware2, (req, res)=>{
    res.end(' Final Result')
})

// http://localhost:5000/login
const checkLogIn = (req, res, next)=>{
    if(true) { // login sucess
      req.username = "arif" // get a user
      next()
    } else { //log in failed
        res.send(' Login Failed. Please give us correct data!')
    }
}
app.get('/login', checkLogIn, (req, res)=>{
    res.send(`${req.username} is successfully logged in!`)
})

app.get('/loginByPermission', permission, (req, res)=>{
    res.send(`You are successfully logged in!`)
})

app.listen(PORT, () => console.log(`My server is running on Port ${PORT}`))