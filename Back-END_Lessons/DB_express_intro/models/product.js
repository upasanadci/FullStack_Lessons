import {Schema, model} from 'mongoose'
const productSchema = new Schema({
  title:String,
  price:Number,
  discount:Number,
  seller:String,
  quantity:Number,
  brand:String,
  created_at: {
    type: Date,
    default: Date.now()
  },
  model: String,
  reviews: String
})
const Product = model('Product', productSchema)
export default Product


