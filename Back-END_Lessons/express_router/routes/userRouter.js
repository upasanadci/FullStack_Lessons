import express from "express" 
const router = express.Router()

// /user/list
router.get('/list', (req, res)=>{res.json('users list')})

// /user/orders
router.get('/orders', (req, res)=>{res.json('how many products you already brought')})

// /user/get/:id
router.get('/:userid', (req, res)=>{res.json('user id and 1 user')})

export {router as userRouter}