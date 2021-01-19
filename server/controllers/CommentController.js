const { Comment } = require("../models");

class CommentController {
  static async createComment(req, res, next) {
    try {
      const { content, KaryaID, UserID } = req.body;

      const newComment = await Comment.create({
        content,
        KaryaID,
        UserID,
      });

      res.status(201).json({ newComment });
    } catch (error) {
      next(error);
    }
  }

  static async readAllCommentByKarya(req, res, next) {
    try {
      const { KaryaID } = req.body;
      const comments = await Comment.findAll({
        where: {
          KaryaID,
        },
      });

      res.status(200).json({ comments });
    } catch (error) {
      next(error);
    }
  }

  static async readAllCommentByUser(req, res, next) {
    try {
      const { UserID } = req.body;
      const comments = await Comment.findAll({
        where: {
          UserID,
        },
      });

      res.status(200).json({ comments });
    } catch (error) {
      next(error);
    }
  }

  static async readOneComment(req, res, next) {
    try {
      const { id } = req.params;

      const comment = await Comment.findByPk(id);

      res.status(200).json({ comment });
    } catch (error) {
      next(error);
    }
  }

  static async updateComment(req, res, next) {
    try {
      const { id } = req.params;
      const { content, KaryaID, UserID } = req.body;

      let comment = await Comment.findByPk(id);
      if (!comment) throw { name: "NotFound" };
      else {
        Comment.update({
          content,
          KaryaID,
          UserID,
        });

        res.status(201).json({ msg: `Comment: ${comment.id} has updated` });
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteComment(req, res, next) {
    try {
      const { id } = req.params;

      let comment = await Comment.findByPk(id);
      if (!comment) throw { name: "NotFound" };
      else {
        comment.destroy();

        res.status(201).json({ msg: `Comment: ${comment.id} has deleted` });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CommentController;
