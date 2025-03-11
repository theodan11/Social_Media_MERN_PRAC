import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth.js'






const app = express()

dotenv.config()
app.use(express.json())



app.use('/api/v1/auth/', authRouter)



mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("connected to mongo")})


app.get('/', (req, res)=>{
    return res.send({'msg': 'hello from the other side'})
})


app.listen(process.env.PORT, ()=>{
    console.log(`running on ${process.env.PORT}`);
})