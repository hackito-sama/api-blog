import { Router } from "express";

import {
  getComments,
  getCommentById,
  createComment,
  deleteComment,
  updateComment,
  getCommentByPublication,
} from "../controllers/comment.controller";

const router = Router();

//api/comment

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.post("/", createComment);
router.get("/", getComments);

// api/comment/id
router.get("/:id", getCommentById);
router.get("/publication/:publicationId", getCommentByPublication);

router.delete("/:id", deleteComment);
router.put("/:id", updateComment);

export default router;
