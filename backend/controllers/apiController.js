const { Recipe, Item, Product } = require("../models/models");

exports.getRecipe = function (req, res, next) {
  let query = req.params.id ? { _id: req.params.id } : {};
  Recipe.find(query)
    .select("name quantity unity cost items")
    .then((resp) => {
      res.send(resp);
    })
    .catch((next) => {
      res.send("id not found");
    });
};

exports.showRecipes = function (req, res, next) {
  Recipe.find()
    .then((resp) => {
      res.send(resp);
    })
    .catch((next) => {
      res.send(next);
    });
};

exports.getItem = function (req, res, next) {
  let query = req.params.id ? { _id: req.params.id } : {};
  Item.find(query)
    .select("name quantity unity cost")
    .then((resp) => {
      res.send(resp);
    })
    .catch((next) => {
      res.send(`id ${req.params.id} not found`);
    });
};

exports.getItemByName = function (req, res, next) {
  let query = req.params.name
    ? { name: { $regex: new RegExp(req.params.name, "i") } }
    : {};
  Item.find(query)
    .select("name quantity unity cost")
    .then((resp) => {
      res.send(resp);
    })
    .catch((next) => {
      res.send(`name ${req.params.name} not found`);
    });
};

exports.showItems = function (req, res, next) {
  Item.find()
    .then((resp) => {
      res.send(resp);
    })
    .catch((next) => {
      res.send(next);
    });
};

exports.getProduct = function (req, res, next) {
  let query = req.params.id ? { _id: req.params.id } : {};
  Product.find(query)
    .select("name quantity unity cost")
    .then((resp) => {
      res.send(resp);
    })
    .catch((next) => {
      res.send("id not found");
    });
};

exports.showProducts = function (req, res, next) {
  Product.find()
    .then((resp) => {
      res.send(resp);
    })
    .catch((next) => {
      res.send(next);
    });
};

exports.addItem = function (req, res, next) {
  const item = new Item(req.body);
  item
    .save()
    .then((resp) => {
      res.send(resp);
    })
    .catch((next) => {
      res.send(next);
    });
};

exports.deleteItem = function (req, res, next) {
  Item.findByIdAndDelete(req.params.id)
    .then((resp) => {
      res.send(resp);
    })
    .catch((next) => {
      res.send(next);
    });
};

exports.updateItem = function (req, res, next) {
  Item.findByIdAndUpdate(req.params.id, req.body)
    .then((resp) => {
      res.send(resp);
    })
    .catch((next) => {
      res.send(next);
    });
};
