// all imports
import express from "express" 
import {indexRouter} from "./routes/indexRouter.js"
import {userRouter} from "./routes/userRouter.js"
// settings and variables 
const app = express()
const PORT = 5000

// application setup or use
app.use(express.json())

// all Routes
// app.use('common path or endpoint', file namespace)
// use indexRouter
app.use('/', indexRouter)
// use userRouter
app.use('/user', userRouter)

app.get('/products', (req, res)=>{res.json('product list')})
app.get('/product/:id', (req, res)=>{res.json('product id')})

// final call of server
app.listen(PORT, () => console.log(`My server is running on Port ${PORT}`))