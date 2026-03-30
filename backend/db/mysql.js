const mysql = require("mysql2");

const db= mysql.createConnection({
  host: "localhost",
  user: "appuser",
  password: "Password@123",
  database: "rental_db"
});


db.connect((err) => {
  if (err) {
    console.log("DB connection error:", err);
  } else {
    console.log("MySQL connected");
  }
});



module.exports = db;