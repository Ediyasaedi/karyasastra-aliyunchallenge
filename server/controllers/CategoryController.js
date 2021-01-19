const { Category } = require("../models");

class CategoryController {
  static async createCategory(req, res, next) {
    try {
      const { name, description } = req.body;

      const newCategory = await Category.create({
        name,
        description,
      });

      res.status(201).json({ newCategory });
    } catch (error) {
      next(error);
    }
  }

  static async readAllCategory(req, res, next) {
    try {
      const categories = await Category.findAll();

      res.status(200).json({ categories });
    } catch (error) {
      next(error);
    }
  }

  static async readOneCategory(req, res, next) {
    try {
      const { id } = req.params;

      const category = await Category.findByPk(id);

      res.status(200).json({ category });
    } catch (error) {
      next(error);
    }
  }

  static async updateCategory(req, res, next) {
    try {
      const { id } = req.params;
      const { name, description } = req.body;

      let category = await Category.findByPk(id);
      if (!category) throw { name: "NotFound" };
      else {
        category.update({
          name,
          description,
        });

        res.status(201).json({ msg: `category: ${category.name} has updated` });
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;

      let category = await Category.findByPk(id);
      if (!category) throw { name: "NotFound" };
      else {
        category.destroy();

        res.status(201).json({ msg: `category: ${category.name} has deleted` });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CategoryController;
