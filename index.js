const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

// Middleware
app.use(express.static(__dirname + "/dist"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post("/", (req, res) => {
  console.log(req.body)
  res.send("Success!!!")
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})