const express = require("express");
const router = express.Router();
const db = require("../db/mysql");

// GET all listings
router.get("/", (req, res) => {
  const sql = "SELECT * FROM listings";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json("Error fetching listings");
    res.json(result);
  });
});

// GET single listing
router.get("/:id", (req, res) => {
  const sql = "SELECT * FROM listings WHERE id=?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json("Error fetching listing");
    if (result.length === 0) return res.status(404).json("Listing not found");
    res.json(result[0]);
  });
});

// CREATE listing
router.post("/", (req, res) => {
  const { title, description, price, location, owner_id } = req.body;
  const sql = "INSERT INTO listings (title, description, price, location, owner_id) VALUES (?,?,?,?,?)";
  db.query(sql, [title, description, price, location, owner_id], (err, result) => {
    if (err) return res.status(500).json("Error creating listing");
    res.json({ message: "Listing created", id: result.insertId });
  });
});

// UPDATE listing
router.put("/:id", (req, res) => {
  const { title, description, price, location } = req.body;
  const sql = "UPDATE listings SET title=?, description=?, price=?, location=? WHERE id=?";
  db.query(sql, [title, description, price, location, req.params.id], (err) => {
    if (err) return res.status(500).json("Error updating listing");
    res.json("Listing updated");
  });
});

// DELETE listing
router.delete("/:id", (req, res) => {
  const sql = "DELETE FROM listings WHERE id=?";
  db.query(sql, [req.params.id], (err) => {
    if (err) return res.status(500).json("Error deleting listing");
    res.json("Listing deleted");
  });
});

module.exports = router;