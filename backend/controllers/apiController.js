const { Recipe, Item, Product } = require("../models/models");

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

exports.addProduct = function (req, res, next) {
    const product = new Product(req.body);
    product
        .save()
        .then((resp) => {
        res.send(resp);
        })
        .catch((next) => {
        res.send(next);
        });
    };

exports.deleteProduct = function (req, res, next) {
    Product.findByIdAndDelete(req.params.id)
        .then((resp) => {
        res.send(resp);
        })
        .catch((next) => {
        res.send(next);
        });
    };

exports.updateProduct = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body)
        .then((resp) => {
        res.send(resp);
        })
        .catch((next) => {
        res.send(next);
        });
    };

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

exports.addRecipe = function (req, res, next) {
  const recipe = new Recipe(req.body);
  recipe
    .save()
    .then((resp) => {
      res.send(resp);
    })
    .catch((next) => {
      res.send(next);
    });
};

exports.deleteRecipe = function (req, res, next) {
    Recipe.findByIdAndDelete(req.params.id)
        .then((resp) => {
        res.send(resp);
        })
        .catch((next) => {
        res.send(next);
        });
    };

exports.updateRecipe = function (req, res, next) {
    Recipe.findByIdAndUpdate(req.params.id, req.body)
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
      res.send("id not found");
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
