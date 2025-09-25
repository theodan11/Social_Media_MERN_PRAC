import express from 'express'
import { logOut, userLogin, userRegister } from '../controller/authController.js'


const router = express.Router()



router.get('/', (req, res) => {
    return res.send({ "msg": "hello from the side of auth" })
})


// Creating user
router.post('/register', userRegister)
router.post('/logout', logOut)
router.post('/login', userLogin)


export default router