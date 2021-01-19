const { Karya } = require("../models");

class KaryaController {
  static async createKarya(req, res, next) {
    try {
      const { CategoryID, UserID, content } = req.body;

      const newKarya = await Karya.create({
        CategoryID,
        UserID,
        content,
        is_banned: false,
        count_report: 0,
      });

      res.status(201).json({ newKarya });
    } catch (error) {
      next(error);
    }
  }

  static async readAllKaryaByCategory(req, res, next) {
    try {
      const { id } = req.params;
      const karyas = await Karya.findAll({
        where: {
          CategoryID: id,
        },
      });

      res.status(200).json({ karyas });
    } catch (error) {
      next(error);
    }
  }

  static async readAllKaryaByUser(req, res, next) {
    try {
      const { id } = req.params;
      const karyas = await Karya.findAll({
        where: {
          UserID: id,
        },
      });

      res.status(200).json({ karyas });
    } catch (error) {
      next(error);
    }
  }

  static async readOneKarya(req, res, next) {
    try {
      const { id } = req.params;

      const karya = await Karya.findByPk(id);

      res.status(200).json({ karya });
    } catch (error) {
      next(error);
    }
  }

  static async updateKarya(req, res, next) {
    try {
      const { id } = req.params;
      const { CategoryID, UserID, content } = req.body;

      let karya = await Karya.findByPk(id);
      if (!karya) throw { name: "NotFound" };
      else {
        karya.update({
          CategoryID,
          UserID,
          content,
        });

        res.status(201).json({ msg: `karya: ${karya.id} has updated` });
      }
    } catch (error) {
      next(error);
    }
  }

  static async reportedKarya(req, res, next) {
    try {
      const { id } = req.params;

      let karya = await Karya.findByPk(id);
      if (!karya) throw { name: "NotFound" };
      else {
        if (karya.count_report < 10) {
          karya.update({
            count_report: karya.count_report + 1,
          });
        } else {
          karya.update({
            is_banned: true,
          });
        }

        res.status(201).json({ msg: `karya: ${karya.id} has reported` });
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteKarya(req, res, next) {
    try {
      const { id } = req.params;

      let karya = await Karya.findByPk(id);
      if (!karya) throw { name: "NotFound" };
      else {
        karya.destroy();

        res.status(201).json({ msg: `karya: ${karya.id} has deleted` });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = KaryaController;
