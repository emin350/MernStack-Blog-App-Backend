import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())
app.use("/api/user",router);
app.use("/api/blog",blogRouter);


mongoose
.connect(
    'mongodb+srv://admin123:admin123@cluster0.fubxmgz.mongodb.net/Blog?retryWrites=true&w=majority'
    )
.then(()=>app.listen(5000))
.then(() => 
console.log("connected database"))
.catch((err)=> console.log(err));

