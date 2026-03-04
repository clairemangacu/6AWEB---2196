const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const multer = require("multer");
const app = express();
app.use(cors());

const CONNECTION_STRING = "mongodb://localhost:27017/";
const DATABASENAME = "MyDb";
let database;

app.use((req, res, next) => {
  if (!database) {
    return res.status(503).json({ error: "Database not connected yet." });
  }
  next();
});

console.log("Starting API...");
console.log("Connecting to MongoDB...");

async function start() {
  try {
    const client = new MongoClient(CONNECTION_STRING, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });
    await client.connect();
    database = client.db(DATABASENAME);
    console.log("Yay! Now connected to Cluster");
    app.listen(5038, () => {
      console.log("Server running on http://localhost:5038");
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}
start();

// Get all books
app.get("/api/books/GetBooks", async (req, res) => {
  try {
    const result = await database.collection("Books").find({}).toArray();
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// Add a book
app.post("/api/books/AddBook", multer().none(), async (req, res) => {
  try {
    const numOfDocs = await database.collection("Books").countDocuments();
    await database.collection("Books").insertOne({
      id: String(numOfDocs + 1),
      title: req.body.title,
      author: req.body.author,
      year: Number(req.body.year) || 0,
      genre: req.body.genre,
      desc: req.body.desc,
      publisher: req.body.publisher,
      pages: Number(req.body.pages) || 0,
    });
    res.json("Added Successfully");
  } catch (error) {
    res.status(500).json({ error: "Failed to add book" });
  }
});

// Update a book
app.put("/api/books/UpdateBook", multer().none(), async (req, res) => {
  try {
    await database.collection("Books").updateOne(
      { id: req.query.id },
      { $set: {
        title: req.body.title,
        author: req.body.author,
        year: Number(req.body.year) || 0,
        genre: req.body.genre,
        desc: req.body.desc,
        publisher: req.body.publisher,
        pages: Number(req.body.pages) || 0,
      }}
    );
    res.json("Updated Successfully");
  } catch (error) {
    res.status(500).json({ error: "Failed to update book" });
  }
});

// Delete book
app.delete("/api/books/DeleteBook", async (req, res) => {
  try {
    await database.collection("Books").deleteOne({ id: req.query.id });
    res.json("Deleted successfully!");
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book" });
  }
});