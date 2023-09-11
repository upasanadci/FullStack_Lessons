import express  from "express";
import {getAllOrders, addNewOrder} from "../controllers/ordersController.js"
let route = express.Router()


route.get("/" , getAllOrders);
route.post("/" , addNewOrder);


export default route;