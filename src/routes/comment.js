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

router.post("/", createComment);
router.get("/", getComments);

// api/comment/id
router.get("/:id", getCommentById);
router.get("/publication/:publicationId", getCommentByPublication);

router.delete("/:id", deleteComment);
router.put("/:id", updateComment);

export default router;
