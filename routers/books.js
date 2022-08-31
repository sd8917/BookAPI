const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

// GET ROUTE TO GET ALL THE BOOKS
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.log("Error", error);
  }
});

// GET ROUTE TO GET THE SINGLE BOOK
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    res.send("Error", error);
  }
});

// POST ROUTE TO CREATE A BOOKS.
router.post("/", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    isbn: req.body.isbn,
    desc: req.body.desc,
    author: req.body.author,
    genre: req.body.genre,
    page: req.body.page,
  });

  try {
    const newBook = await book.save();
    res.json(newBook);
  } catch (error) {
    console.log("Error", error);
  }
});

// DELETE A BOOK BY ID
router.delete("/:id", async (req, res) => {
  try {
    Book.findOne({ _id: req.params.id }, function (err, book) {
      console.log("This object will get deleted", book);
      book.remove();
      res.json({ message: "Deleted succesfully !" });
    });
  } catch (error) {
    res.send("Error", error);
  }
});

module.exports = router;
