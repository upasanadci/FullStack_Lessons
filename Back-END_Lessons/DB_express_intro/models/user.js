import {Schema, model} from 'mongoose'

// map of user object creating by Schema
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    country: String,
    mobile: Number, //0152423723
    telefone: String, // +201271261
    zip: Number,
    married: Boolean,
    created: {
        type: Date,
        default: Date.now()
    }, // Date when user created
    //company: String
    company: {
       type: String,
       default: 'DCI' 
    }
})

// make a model from the schema
const User = model('User', userSchema)
export default User


