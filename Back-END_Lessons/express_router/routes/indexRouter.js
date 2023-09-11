import express from "express" 
const router = express.Router()

router.get('/', (req, res)=>{res.json('Welcome page')})
router.get('/list', (req, res)=>{res.json('data list')})
router.get('/admin/:id', (req, res)=>{res.json('admin info')})

router.get('/about', (req, res)=>{res.json('about us')})

router.get('/contact', (req, res)=>{res.json('contact us')})

// redirect
// when someone visit that link we will send him to that website
router.get('/goto/imdb', (req, res)=>{
    // any code
    res.redirect('https://www.imdb.com/')
})

//module.exports = router
export  {router as indexRouter}