const route = require("express").Router();
const CommentController = require("../controllers/CommentController");

route.get("/karya", CommentController.readAllCommentByKarya);
route.get("/user", CommentController.readAllCommentByUser);
route.get("/:id", CommentController.readOneComment);
route.post("/", CommentController.createComment);
route.put("/:id", CommentController.updateComment);
route.delete("/:id", CommentController.deleteComment);

module.exports = route;
