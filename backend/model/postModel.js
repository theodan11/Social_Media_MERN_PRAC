import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    content:{
        type: String,
        max: 500
    },
    image:{
        type: String, 

    },
    likes:{
        type: Array,
        default: []
    }  
},{timestamps:true})


const model = mongoose.model("Post", PostSchema)
export default model