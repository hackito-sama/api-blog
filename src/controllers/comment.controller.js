import moment from "moment";
import Comment from "../models/Comment";

export async function createComment(req, res) {
  const { fullname, message, publicationId } = req.body;

  let currentDate = moment().format("YYYY-MM-DD");

  try {
    let newComment = await Comment.create(
      {
        fullname: fullname,
        message: message,
        publicationId: publicationId,
        createat: currentDate,
      },
      { fields: ["fullname", "message", "publicationId", "createat"] }
    );

    if (newComment) {
      return res.json({
        message: "Comment saved",
        data: newComment,
      });
    }
  } catch (e) {
    res.status(500).json({
      message: "Error! comment not saved",
      data: {},
    });
  }
}

export async function getComments(req, res) {
  try {
    const comments = await Comment.findAll();
    res.json({
      data: comments,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getCommentById(req, res) {
  const { id } = req.params;

  try {
    const comment = await Comment.findOne({
      where: {
        id,
      },
    });
    res.json(comment);
  } catch (e) {
    console.log("error", e);
  }
}

export async function deleteComment(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Comment.destroy({
      where: {
        id,
      },
    });

    res.json({
      message: "comment delete!",
      count: deleteRowCount,
    });
  } catch (e) {
    console.log("Error: ", e);
  }
}

export async function updateComment(req, res) {
  const { id } = req.params;
  const { fullname, message } = req.body;
  try {
    const comment = await Comment.findOne({
      attributes: ["id", "fullname", "message"],
      where: { id },
    });
    if (comment != null) {
      await Comment.update(
        {
          fullname,
          message,
        },
        {
          where: { id },
        }
      );

      return res.json({
        message: "comment updated",
        data: comment,
      });
    } else {
      return res.json({
        message: "comment not found",
        data: comment,
      });
    }
  } catch (e) {
    console.log("Error!", e);
  }
}

export async function getCommentByPublication(req, res) {
  const { publicationId } = req.params;
  try {
    const comments = await Comment.findAll({
      attributes: ["id", "fullname", "message"],
      where: { publicationId },
    });

    res.json({
      data: comments,
    });
  } catch (e) {}
}
