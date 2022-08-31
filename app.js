const express = require("express");
const mongoose = require("mongoose");

const bookRoutes = require("./routers/books");
const app = express();

const url = "mongodb://localhost/bookAPI";
mongoose.connect(url);

const con = mongoose.connection;
con.on("open", () => {
  console.log("Connected !!");
});

app.use(express.json()); //middleware to read the body

app.use("/api/books/", bookRoutes);

app.listen(4000, () => {
  console.log("Server started !");
});
