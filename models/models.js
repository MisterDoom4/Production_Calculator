const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define models
const productSchema = new Schema({
  quantity: {
    type: float,
    required: [true, "*Campo obrigatório!"],
  },
  unity: {
    type: string,
    required: [true, "*Campo obrigatório!"],
  },
});

const recipeSchema = new Schema({
  quantity: {
    type: Float,
    required: [true, "*Campo obrigatório!"],
  },
  unity: {
    type: String,
    required: [true, "*Campo obrigatório!"],
  },
  items: [
    {
      id: {
        type: String,
        required: [true, "*Campo obrigatório!"],
      },
      quantity: {
        type: float,
        required: [true, "*Campo obrigatório!"],
      },
    },
  ],
  cost: {
    type: float,
    required: [true, "*Campo obrigatório!"],
  },
  profit: {
    type: float,
    required: [true, "*Campo obrigatório!"],
  },
});

const itemSchema = new Schema({
  name: {
    type: String,
    required: [true, "*Campo obrigatório!"],
  },
  quantity: {
    type: float,
    required: [true, "*Campo obrigatório!"],
  },
  unity: {
    type: string,
    required: [true, "*Campo obrigatório!"],
  },
  cost: {
    type: float,
    required: [true, "*Campo obrigatório!"],
  },
});

// Export models
const Product = mongoose.model("Product", productSchema);
const Recipe = mongoose.model("Recipe", recipeSchema);
const Item = mongoose.model("Item", itemSchema);

module.exports = {
  Product,
  Recipe,
  Item,
};
