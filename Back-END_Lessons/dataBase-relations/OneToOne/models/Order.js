import mongoose from "mongoose";
import { Schema, model } from "mongoose";

// address subSchema
const addressSchema = new Schema({
  streetNum: String,
  city: String,
  postCode: Number,
  country: String,
}, {
    _id : false
});

const orderSchema = new Schema({
  firstName: String,
  lastName: String,
  product: String,
  address: addressSchema,
} , {
    versionKey : false
});

const Order = model("Order", orderSchema);

export default Order;
