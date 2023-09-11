import express from "express" 
import fs from "fs" // build-in module
import axios from "axios" // 3rd-party module

const app = express()
const PORT = 5000
app.use(express.json())

// Routes
app.get('/', (req, res)=> res.end('Home page'))

// display just a message
app.get('/users', (req, res)=> res.end('Users list'))

// display users from a user.json file
app.get('/user/json', (req, res)=> {
    // read the json file and display it
    const readJson = (fs.readFileSync('user.json')).toString()
    console.log(readJson) // string
    const convertToObject = JSON.parse(readJson) // js object
    console.log(convertToObject)
    let htmlData = `
    <h1>User list from JSON data </h1>
    <ul>
    ${convertToObject.map(item=> `<li>${item.id}, ${item.username}, ${item.country}, ${item.gender}</li>`)}
    </ul>
    `
    res.end(htmlData)
})


// add a new user to json
app.get('/user/add', (req, res)=>{
    const readJson = fs.readFileSync('user.json')
    const convertToObject = JSON.parse(readJson)
    const newUser = {
        id: 15,
        username: "Benjamin",
        country: "Germany",
        gender: "male"
    }
    convertToObject.push(newUser)
    // now update json
    console.log(convertToObject)
    // convert js to string again
    const convertToString = JSON.stringify(convertToObject)
    // add data to json
    fs.writeFile('user.json', convertToString, err=>{
       if(!err) res.end('1 user added')
    })
})


// display users from REST API link/DB
app.get('/user/restapi/fetch', (req, res)=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    //.then(readJson=> res.end(JSON.stringify(readJson)))
    .then(readJson=> res.json(readJson))
})

// display rest api data using axios
// npm i axios
app.get('/user/restapi/axios', (req, res)=>{
    // axios.httpMethod().then(result)
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(readJson => {
        console.log(readJson.data)
        res.send(readJson.data)
    })
})

app.get('/user/:userId', (req, res)=> res.end(`user id is: ${req.params.userId}`))

app.get('/user/:userId/profile/picture/:pic_id', (req, res)=> {
    console.log(req.params)
    const {userId, pic_id} = req.params
    res.end(`User id ${userId} and profile picture number is ${pic_id}`)
})

app.get('/users/message', (req, res)=>{
    //res.end('final message')
    //res.send('Alert message')
    //res.json("This is an alert message")
    res.json({id: 1, name: "arif"})
})

app.post('/newpost', (req,res)=>{
    if(req.body) res.json(req.body)
    res.json('nothing')
})

app.listen(PORT, () => console.log(`My server is running on Port ${PORT}`))