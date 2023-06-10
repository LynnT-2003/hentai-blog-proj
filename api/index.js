const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

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
    const hashedPassword = await bcrypt.hash(password, salt);
    const userDoc = await User.create({
      username,
      password: hashedPassword,
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  res.json(passOk);
});

console.log("Server is up and running at", process.env.API_PORT);
app.listen(process.env.API_PORT);

// mongodb+srv://u6411271:nAg9n3yVVmt1tnpF@cluster0.1i47dzh.mongodb.net/?retryWrites=true&w=majority
// nAg9n3yVVmt1tnpF
