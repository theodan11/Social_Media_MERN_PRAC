import express from 'express'
import { userRegister } from '../controller/authController'


const router = express.Router()



router.get('/', (req, res)=>{
    return res.send({"msg":"hello from the side of auth"})
})


// Creating user
router.post('/register', userRegister)


export default router