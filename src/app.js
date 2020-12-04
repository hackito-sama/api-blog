import express, { json } from "express";
import morgan from "morgan";

//importing routes
import commentRoutes from "./routes/comment";
import publicationRoutes from "./routes/publication";

//intialize
const app = express();

//middelware
app.use(morgan("dev"));
app.use(json());

//routes

//CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use("/api/comment", commentRoutes);
app.use("/api/publication", publicationRoutes);

export default app;
