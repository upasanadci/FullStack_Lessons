import { Schema, model } from 'mongoose'

const todoSchema = new Schema({
    task: String,
    created_at: Date,
    picture_path: String
})

const TodoList = model('TodoList', todoSchema)
export default TodoList