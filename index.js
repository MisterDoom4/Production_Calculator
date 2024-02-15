// Code to connect to MongoDB and start the server
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

//Import models
const { Item, Recipe }  = require('./models/models');

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
  
app.get('/items', (req, res) => {

  getItem().then((resp) => { 
    res.send(resp);
  });
});

app.get('/recipes', (req, res) => {

  getRecipe().then((resp) => { 
    res.send(resp);
  });
});

app.get('/item/:id', (req, res) => {
  const id = req.params.id;

  getItem(id).then((resp) => {
    res.send(resp);
  }).catch((error) => {
    res.send('id not found');
  });
});



app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});


async function getItem(id) {
  let query = id ? { _id: id } : { };
  let items = await Item.find(query).select('name quantity unity cost');
  console.log(items);
  return items;
}

async function getRecipe(id) {
  let query = id ? { _id: id } : { };
  let items = await Recipe.find(query).select('name quantity unity cost items');
  //console.log(items);
  return items;
}

async function getRecipe(id) {
  let query = id ? { _id: id } : { };
  let items = await Recipe.find(query).select('name quantity unity cost items');
  console.log(items[0].items);
  console.log(getItem(items[0].items[0].id));
  //getItem(items[0].items[0].id)
  return items;
}


/*
const recipe = require('./sample-data/baseRecipes.json')[0];

const newRecipe = new Recipe(recipe);
newRecipe.save().then((res) => {
  console.log(res);
}).catch((error) => {
  console.error(error);
});*/
