// server.js

const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Database file path inside the dist folder
const dbPath = path.resolve(__dirname, 'dist', 'mydatabase.db');

// Connect to SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database connection error:', err.message);
  } else {
    console.log('Connected to the SQLite database');
  }
});

// Define your routes or API endpoints here
app.get('/', (req, res) => {
  res.send('SQLite Server is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
