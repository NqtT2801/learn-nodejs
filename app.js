const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')
const postsRoute = require('./routes/posts.js')
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use('/posts', postsRoute)
app.get("/", (req, res) => {
  res.send("We are on home");
});
mongoose.connect(
  process.env.DB_CONNECTION,
  () => {
    console.log("Connected DB");
  }
);

app.listen(3000);
