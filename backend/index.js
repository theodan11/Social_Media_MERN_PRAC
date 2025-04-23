import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'
import postRouter from './routes/post.js'
import cors from 'cors'
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express()

dotenv.config()

app.use('/images',express.static(path.join(__dirname, 'public/images')))
app.use(cors())
app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'public/images')
    },
    filename: (req, file, cb)=>{
        cb(null, req.body.filename)
    }
})

const upload = multer({storage: storage})


app.post('/api/v1/upload', upload.single('file'), (req, res)=>{
    try {
        return res.status(200).json({
            msg:"uploaded successfully"
        })
    } catch (error) {
        return res.status(400).json(error)
    }
})
app.use('/api/v1/auth/', authRouter)
app.use('/api/v1/user/', userRouter) 
app.use('/api/v1/post/', postRouter) 



mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("connected to mongo")})


app.get('/', (req, res)=>{
    return res.send({'msg': 'hello from the other side'})
})


app.listen(process.env.PORT, ()=>{
    console.log(`running on ${process.env.PORT}`);
})