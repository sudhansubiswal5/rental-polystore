const express = require("express");
const router = express.Router();
const db = require("../db/mysql");

// SIGNUP
router.post("/signup", (req, res) => {

  const { name, email, password } = req.body;

  const sql = "INSERT INTO users (name,email,password) VALUES (?,?,?)";

  db.query(sql, [name, email, password], (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).json("Signup failed");
    }

    res.json("User registered successfully");
  });

});


// LOGIN
router.post("/login", (req, res) => {

  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=? AND password=?";

  db.query(sql, [email, password], (err, result) => {

    if (err) {
      return res.status(500).json("Login error");
    }

    if (result.length > 0) {
      res.json("Login successful");
    } else {
      res.json("Invalid credentials");
    }

  });

});

module.exports = router;