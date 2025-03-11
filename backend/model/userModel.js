import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min:6, 
    },
    profilePicture:{
        type: String,
        default: "",
    },
    coverPicture:{
        type:String,
        default: "",
    },
    followers:{
        type: Array,
        default: [],
    },
    followings:{
        type:Array,
        default: [],
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    desc:{
        type: String,
        default:""
    }
    
},{timestamps: true})

const model = mongoose.model("User", UserSchema)
export default model