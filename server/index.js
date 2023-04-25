// console.log("hello");
// import 
// import bodyparser from "body-parser";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from 'cors';
import connection from "./Db/db.js";
import express from "express";
import route from "./Routes/routes.js";

const app=express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",route);

// app.get('/user',(req,res)=>{
//     res.end("hello");
// })
// app.get('/submit',(req,res)=>{
//     res.end("submit");
// })
connection();

app.listen('8080',()=>{
    console.log("connected");
})