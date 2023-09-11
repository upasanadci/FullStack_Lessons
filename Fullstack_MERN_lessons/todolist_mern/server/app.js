import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import TodoList from './models/TodoList.js'

const app = express()
const PORT = 5000
app.use(cors())
app.use(express.json())

// Multer Storage setting
import multer from 'multer'
const storage = multer.diskStorage({
    // destination to upload
    destination: function (req, file, callback) {
        callback(null, 'public/images')
    },
    // filename of my choice
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })

// DB connection here
mongoose.connect(process.env.DB_LINK)
    .then(() => {
        console.log('Database connected on port 2707')
    })
    .catch(() => { console.log('DB connection fail') })
// routes
// receive username and response back to client
app.post('/api/username', (req, res) => {
    console.log(req.body)
    res.json('Backend successfully received the username')
})

// create todo list
app.post('/api/todo/add', (req, res) => {
    console.log(req.body)
    // save data in DB
    new TodoList(req.body).save()
    res.json('1 task has been added')
})

// display todolist
app.get('/api/todo/list', async (req, res) => {
    const todoList = await TodoList.find()
    res.json(todoList)
})


// picture upload
app.post('/api/picture/upload', upload.single('picture'), (req, res) => {
    console.log(req.body, req.file)
    const newPic = {
        task: req.body.title,
        picture_path: req.file.path
    }
    new TodoList(newPic).save().then(() => res.json(' 1 picture uploaded'))
})

app.listen(process.env.PORT, () => {
    console.log('Server is running on PORT: ' + PORT)
})