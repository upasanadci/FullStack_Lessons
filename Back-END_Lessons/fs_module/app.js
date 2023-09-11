import express from "express"
//const express = require('express')
// Build-in module. e.g: fs(file-system)
// var fs = require('fs');
import fs from "fs" // build-in
import { readTextFile, readInfo } from "./controllers/appController.js"
//import axios from "axios" // 3rd-party module need to be install

const app = express()
const PORT = 5000

// Routes
// reading file asynchronously/non-block
app.get('/', readTextFile)

// reading file synchronously/block
app.get('/info', readInfo)

// Main page route
app.get('/main', (req, res)=>{
    let htmlFile = fs.readFileSync('views/main.html')
    res.end(htmlFile)
})

// Profile page
app.get('/profile', (req, res)=>{
    let htmlFile = fs.readFileSync('views/profile.html')
    res.end(htmlFile)
})

// reading a json file
app.get('/jsonfile', (req, res)=>{
    let jsonFile = fs.readFileSync('data/user.json')
    res.end(jsonFile)
})

// remove a file
app.get('/remove', (req, res)=>{
    let result = fs.unlinkSync('data/test.txt')
    res.end('1 file has removed')
})

app.listen(PORT, () => console.log(`My server is running on Port ${PORT}`))