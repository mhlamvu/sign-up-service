const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

// Middleware
app.use(express.static(__dirname + "/dist"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post("/", (req, res) => {
  addEmailToMailchimp(req.body.email)
  res.send("Success!!!")
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})


const addEmailToMailchimp = email => {
  const axios = require("axios").default;

  const options = {
    method: 'POST',
    url: `https://us14.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}/members`,
    headers: {
      'user-agent': 'vscode-restclient',
      'content-type': 'application/application/json',
      authorization: `token ${process.env.MAILCHIMP_API}`
    },
    data: {
      "email_address": email,
      "status": "subscribed"
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

}
