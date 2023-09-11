import express from "express"
import cors from "cors"
const app = express()
const PORT = 5000
app.use(cors())
app.use(express.json())

// Routes
app.post('/server/test', (req, res) => {
    console.log(req.body)
    res.json('Yes server is connected with client now!')
})

app.listen(PORT, () => {
    console.log('Server connected on PORT: ' + PORT)
})