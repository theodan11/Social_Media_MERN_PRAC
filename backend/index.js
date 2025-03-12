import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'
import postRouter from './routes/post.js'






const app = express()

dotenv.config()
app.use(express.json())
app.use(cookieParser())


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