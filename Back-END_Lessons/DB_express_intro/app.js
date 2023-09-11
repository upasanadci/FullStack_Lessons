// all imports
import express from "express" 
import mongoose from "mongoose"
import User from "./models/user.js"
import 'dotenv/config'
import Product from "./models/product.js"

// settings and variables 
const app = express()
const PORT = process.env.PORT
app.use(express.json())

// DB connection setup
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME
const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@arifdci.fvkse.mongodb.net/${DB_NAME}`
mongoose.connect(URI)
.then(()=>console.log('Database is connected on PORT 2707'))
.catch((err)=> {
    console.log('Database connection Failed!'+ err.message)
    //if(err) throw err
})

// Lets save some user
// CREATE
app.post('/user/save', (req, res)=>{
    // save data 
    new User(req.body) // create user data instance using model
    .save() // save data
    .then((user)=>{
        res.json(user)
    })
})

// READ
app.get('/user/all', (req, res)=>{
    // ModelName.find() will give us all data from one model
    User //ModelName
    .find() // find all users
    .then(data=>{res.json(data)}) // display all users
})

// only read data based on country
// synchronous way by async/await
app.get('/user/byCountry', async(req, res)=>{
    const userByCountry = await User.find({country: 'USA'})
    res.json(userByCountry)
})

// Exercise 2 routes for products
app.post('/product/save', async (req, res)=>{
    const result = await new Product(req.body).save()
    res.json(result)
})
// show all product
app.get('/product/list', (req, res)=>{
    Product 
    .find() 
    .then(data=>{res.json(data)}) 
})
// show  product by title
app.post('/product/:title', (req, res)=>{
    Product 
    .find({title: req.params.title}) 
    .then(data=>{res.json(data)}) 
})

// show  product by Id
app.get('/product/detail/:id', (req, res)=>{
    console.log(req.params.id)
    Product 
    .find({_id: req.params.id}) 
    .then(data=>{res.json(data)}) 
})

// show by seller
app.get('/product/seller/:seller', (req, res)=>{
    Product
    .find({seller: req.params.seller})
    .then(data=>{res.json(data)})
})

// final call of server
app.listen(PORT, () => console.log(`My server is running on Port ${PORT}`))