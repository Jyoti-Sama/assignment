import express from "express";
import { createPost, getPosts } from "../controller/post.js";

const route = express.Router();

const ggboi = (req,res,next) => {
    console.log(req.body);
    next();
}

route.get('/',getPosts)
route.post('/',ggboi,createPost)


route.post("/test",(req,res)=>{
    console.log(req.body)
    res.send("hehe")
})


export default route;