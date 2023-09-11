import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import TodoList from './models/TodoList.js'
import multer from 'multer'

const app = express()
const PORT = 5000
app.use(cors())
app.use(express.json())
// static folder setting
app.use(express.static('public'))

// setting multer storage
const storage = multer.diskStorage({
    // destination is where we upload our file
    destination: function (req, file, callback) {
        // callback(param1, param2) as multer docs says
        callback(null, 'public/images');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage })

app.use(express.static('/public'));

// DB connection here
mongoose.connect(process.env.DB_LINK)
    .then(() => {
        console.log('Database connected on port 2707')
    })
    .catch(() => { console.log('DB connection fail') })
// routes

// create todo list
app.post('/api/todo/add', upload.single('file'), (req, res) => {
    console.log(req.body, req.file)
    // save data in DB
    new TodoList({
        task: req.body.task,
        picture: req.file.filename,
        created_at: Date.now()
    })
        .save()
        .then(() => {
            res.json('1 task has been added')
        })
        .catch(() => res.json('Failed to save data. Try again'))
})

// display todolist
app.get('/api/todo/list', async (req, res) => {
    const todoList = await TodoList.find()
    res.json(todoList)
})

app.listen(process.env.PORT, () => {
    console.log('Server is running on PORT: ' + PORT)
})