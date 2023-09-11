/**
 * User Model: 
 * - have all info about user data
 * - model is a map of user object
 */
import {_Schema, model} from 'mongoose'

// map of user object creating by Schema
const carSchema = new _Schema({
    title: String,
    color: String,
    speed: String
})

// make a model from the schema
const Car = model('Car', carSchema)
export default Car


