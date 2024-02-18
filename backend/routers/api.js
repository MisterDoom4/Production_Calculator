const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

// busca de receita pelo id
router.get("/recipe/:id", apiController.getRecipe);
// busca de todas as receitas
router.get("/showrecipes",apiController.showRecipes);
// busca de item pelo id
router.get("/item/:id", apiController.getItem);
// busca de todos os itens
router.get("/showitems",apiController.showItems);
// busca de produto pelo id
router.get("/product/:id", apiController.getProduct);
// busca de todos os produtos
router.get("/showproducts",apiController.showProducts);

// adição de item
router.post("/additem", apiController.addItem);
// deletar item
router.delete("/deleteitem/:id", apiController.deleteItem);
// atualizar item
router.put("/updateitem/:id", apiController.updateItem);


module.exports = router;