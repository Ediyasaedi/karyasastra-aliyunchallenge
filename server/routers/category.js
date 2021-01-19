const route = require("express").Router();
const CategoryController = require("../controllers/CategoryController");

route.get("/", CategoryController.readAllCategory);
route.get("/:id", CategoryController.readOneCategory);
route.post("/", CategoryController.createCategory);
route.put("/:id", CategoryController.updateCategory);
route.delete("/:id", CategoryController.deleteCategory);

module.exports = route;
