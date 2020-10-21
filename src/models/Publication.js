import Sequelize from "sequelize";
import {sequelize} from "../database/database";
import Comment from "./Comment";

const Publication = sequelize.define("publications",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    image: {
      type: Sequelize.JSON,
    },
    createat: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

Publication.hasMany(Comment, {foreingKey: 'publicationId', sourceKey: 'id' });
Comment.belongsTo(Publication, {foreingKey: 'publicationId', sourceKey: 'id' });

export default Publication;
