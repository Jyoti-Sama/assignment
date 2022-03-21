import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    sem:String,
    subject:String,
    exam:String,
    year:Number,
    AboutPaper:String,
    paperImage:String,
    createDate:{
        type: Date,
        default:new Date()
    }
})


const postAssignment = mongoose.model('postMessage',postSchema);

export default postAssignment;