const express = require("express")
require('dotenv').config()
const app = express()
const port = 3000
app.get("/", (req, res) => {
    res.send("Hello world")
})
app.get("/twitter", (req, res) => {
    res.send("hiteshdotcom")
})
app.listen(process.env.PORT)