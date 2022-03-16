import postAssignment from "../models/postAssignment.js";

export const getPosts = async (req,res) => {
    
    try {
        const assignmentData = await postAssignment.find();
        res.status(200).json(assignmentData)
    } 
    catch (error) {
        res.status(404).json({message: error.message})
        console.log(error)
    }
    
}

export const createPost = async (req,res) => {
    const post = {
        "sem": "6th",
        "subject": "computer network",
        "exam": "ca 1",
        "year": 2022,
        "AboutPaper": "first chapter",
        "examImage": "currently empty"
    };
    const newPost = new postAssignment(post)
    console.log(newPost)

    try {
        await newPost.save();
        res.status(201).json(newPost)
        
    } catch (error) {
        console.log(error.message);
        res.status(409).json({message:error.message})
    }
}

