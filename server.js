const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req,res)=>{
    res.send("Server running")
})

app.post("/message", (req,res)=>{
    const name = req.body.name

    res.json({
        message: `Hello, ${name}!`
    })
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})