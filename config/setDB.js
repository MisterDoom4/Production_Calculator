const mongoose = require('mongoose');

require('dotenv').config();

//Import model
const { Item }  = require('./../models/models');

//delete all the Items records
async function cleanAllItemsRecords() {
    Item.deleteMany({}).then((res) => { 
        console.log(res);
        mongoose.connection.close();
    }).catch(console.error);
}

const databaseUrl = require('./../config/database').mongoURI;

mongoose.connect(databaseUrl)
  .then(() => {
    console.log('Connected to MongoDB');
    cleanAllItemsRecords();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });