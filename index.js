import express from "express"; 
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import route from "./routes/Post.js";
import dotenv from "dotenv";

//express app
const app = express();

//process.env.
dotenv.config();


//applying middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors({
    origin: '*'
})); 
app.use("/post",route);

//connecting to database
const DATABASE_URL = process.env.DATABASE_URL;
const PORT = 8000  || process.env.PORT; 

mongoose.connect(DATABASE_URL)
    .then(()=> app.listen(PORT, ()=> console.log(`connected to the port ${PORT}`)))
    .catch(err=>console.log(err.messsage));

// app.listen(PORT, ()=> console.log(`connected to the port ${PORT}`))
app.get('/',(req,res)=>{
    res.send("<h2>welcome to the assignment storing application</h2>")
})
