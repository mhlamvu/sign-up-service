const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

// Middleware
app.use(express.static(__dirname + "/public"))

app.post("/", (req, res) => {
  res.send("Success!!!")
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})