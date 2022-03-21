import postAssignment from "../models/postAssignment.js";
import cloudinary from '../utils/cloudinary.js'

export const getPostsAll = async (req, res) => {

    try {
        const assignmentData = await postAssignment.find();
        res.status(200).json(assignmentData)
    }
    catch (error) {
        res.status(404).json({ message: error.message })
        console.log(error)
    }

}

export const createPost = async (req, res) => {
    
    //image storing
    try {
        const { paperImage } = req.body;

        const uploadResponse = await cloudinary.uploader.upload(
            paperImage, {
            upload_preset: 'rjp6gonh'
        });

        console.log(uploadResponse.url);
        //populate with the image url 
        req.body.paperImage = uploadResponse.url;
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "something went wrong!" })
    }


    try {
        const post = req.body;
        const newPost = new postAssignment(post)
        console.log(newPost)
        await newPost.save();
        res.status(201).json(newPost)

    } catch (error) {
        console.log(error.message);
        res.status(409).json({ message: error.message })
    }
}

export const getSelectedPost = async (req, res) => {
    const data = req.body
    console.log(data)
    try {
        const ggdata = await postAssignment.find(data)
        res.status(201).json(ggdata)
    } catch (error) {
        console.log(err)
        res.status(401).json({ message: "something is wrong" })
    }

}

export const updatePost = async (req, res) => {
    const data = req.body;
    const id = data._id;
    console.log(data)

    postAssignment.findByIdAndUpdate(id, data, (err, docs) => {
        if (err) {
            console.log(err)
            res.status(401).json({ message: "something went wrong" })
        }
        else {
            // console.log("Updated User : ", docs);
            res.status(201).json({ message: "sucessfully edited" })

        }
    })
}

export const deletePost = (req, res) => {
    const data = req.body;
    const id = data._id;
    console.log(data);
    postAssignment.findByIdAndDelete(id, (err, docs) => {
        if (err) {
            console.log(err)
            res.status(401).json({ message: "something went wrong" })
        }
        else {
            // console.log("Updated User : ", docs);
            res.status(201).json({ message: "sucessfully deleted" })

        }
    })
}

