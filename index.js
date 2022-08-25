const express = require("express");
const ejs = require("ejs");
const { join } = require("path");
const { connectMongoDB } = require("./mongoose");
const User = require("./models/users");
const { pool } = require("./pg");

connectMongoDB();
const app = express();

// Settings
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get("/ping", async (req, res) => {
  const result = await pool.query(`SELECT NOW()`);
  res.send({
    message: result.rows[0].now,
  });
});

app.get("/profile", (req, res) => {
  res.render("profile", {
    name: "ryan",
    age: 27,
  });
});

// Static files
app.use(express.static("public"));

// Starting the server
app.listen(process.env.PORT || 3000);
console.log("Server is running on port", process.env.PORT || 3000);
