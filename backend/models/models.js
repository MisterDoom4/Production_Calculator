const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define models
const productSchema = new Schema({
  quantity: {
    type: Number,
    required: [true, "*Campo obrigatório!"],
  },
  unity: {
    type: String,
    required: [true, "*Campo obrigatório!"],
  },
});

const recipeSchema = new Schema({
  quantity: {
    type: Number,
    required: [true, "*Campo obrigatório!"],
  },
  unity: {
    type: String,
    required: [true, "*Campo obrigatório!"],
  },
  items: [
    {
        quantity: {
        type: Number,
        required: [true, "*Campo obrigatório!"],
      },
      unity: {
        type: String,
        required: [true, "*Campo obrigatório!"],
      }
    },
  ],
  cost: {
    type: Number,
    required: [true, "*Campo obrigatório!"],
  },
  profit: {
    type: Number,
    required: [true, "*Campo obrigatório!"],
  },
});

const itemSchema = new Schema({
  name: {
    type: String,
    required: [true, "*Campo obrigatório!"],
  },
  quantity: {
    type: Number,
    required: [true, "*Campo obrigatório!"],
  },
  unity: {
    type: String,
    required: [true, "*Campo obrigatório!"],
  },
  cost: {
    type: Number,
    required: [true, "*Campo obrigatório!"],
  },
});

// Export models
const Product = mongoose.model("Products", productSchema);
const Recipe = mongoose.model("Recipes", recipeSchema);
const Item = mongoose.model("Items", itemSchema);

module.exports = {
  Product,
  Recipe,
  Item,
};