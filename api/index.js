const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

const User = require("./models/User");

mongoose.connect(
  "mongodb+srv://u6411271:nAg9n3yVVmt1tnpF@cluster0.1i47dzh.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({ username, password });
    // res.json({ requestData: { username, password } });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

console.log("Server is up and running at", process.env.API_PORT);
app.listen(process.env.API_PORT);

// mongodb+srv://u6411271:nAg9n3yVVmt1tnpF@cluster0.1i47dzh.mongodb.net/?retryWrites=true&w=majority
// nAg9n3yVVmt1tnpF
