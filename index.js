const express = require("express");
const path = require("path");
const ejs = require("ejs");
const { join } = require("path");

const app = express();

// Settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

// Routes
app.get("/api/users", (req, res) =>
  res.json([{ name: "ryan" }, { name: "joe" }])
);

app.get("/profile", (req, res) => {
  res.render("profile", {
    name: "ryan",
    age: 27
  });
});

// Static files
app.use(express.static("public"));

// Starting the server
app.listen(process.env.PORT || 3000);
console.log("Server is running on port", process.env.PORT || 3000);
