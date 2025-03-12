import express from 'express'
import { createPost, getAllPost } from '../controller/postController.js'



const router = express.Router()



//create, update, delete, like, get single post, get all post
router.get('/test',async (req, res)=>{
    return res.status(200).json({"msg":"hello i am on post route yay"})
})



router.get('/', getAllPost)
router.post('/create', createPost)

router.put('/update')





export default router