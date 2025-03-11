import express from 'express';
import dotenv from 'dotenv';







const app = express()

dotenv.config()


app.get('/', (req, res)=>{
    return res.send({'msg': 'hello from the other side'})
})


app.listen(process.env.PORT, ()=>{
    console.log(`running on ${process.env.PORT}`);
})