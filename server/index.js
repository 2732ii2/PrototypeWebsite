// console.log("hello");

import connection from "./Db/db.js";
import express from "express";
const app=express();


connection();

app.listen('8080',()=>{
    console.log("connected");
})