// Code to connect to MongoDB and start the server
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
const databaseUrl = require('./config/database').mongoURI;
mongoose.connect(databaseUrl)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

