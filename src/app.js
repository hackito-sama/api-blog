import express, {json} from "express";
import morgan from "morgan";


//importing routes
//import commentRoutes from "./routes/comments";
//import publicationRoutes from "./routes/publications";

//intialize
const app = express();

//middelware
app.use(morgan('dev'));
app.use(json());

//routes
//app.use('api/comments', commentRoutes);
//app.use('api/publication', publicationRoutes);



export default app;