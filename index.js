const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello Wolrd"));

app.listen(process.env.PORT || 3000);
console.log("Server is running in port", process.env.PORT || 3000);
