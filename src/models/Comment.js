import Sequelize from "sequelize";
import {sequelize} from "../database/database";

const Comment = sequelize.define("comments",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    fullname: {
      type: Sequelize.STRING,
    },
    message: {
      type: Sequelize.TEXT,
    },
    publicationId: {
      type: Sequelize.INTEGER,
    },
    createat: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

export default Comment;
