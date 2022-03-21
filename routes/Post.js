import express from "express";
import dotenv from 'dotenv';
dotenv.config();

import { createPost, deletePost, getPostsAll, getSelectedPost, updatePost } from "../controller/post.js";

const route = express.Router();

const OPERATION_KEY = process.env.OPERATION_KEY;

const ggboi = (req,res,next) => {
    
    if(!(req.body.operationKey)){
        return res.status(401).json({message:"please provide the key!"})
    }
    if(req.body.operationKey === OPERATION_KEY){
       return next();
    }
    return res.status(401).json({message:"invalid key!"})
    
}

route.get('/',getPostsAll)

//key required
route.post('/',ggboi,createPost)
route.put('/edit',ggboi,updatePost)
route.delete('/delete',ggboi,deletePost)
//
route.post("/test",getSelectedPost)


export default route;