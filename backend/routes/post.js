import express from 'express'
import { createPost, getAllPost, getSinglePost, updatePost } from '../controller/postController.js'
import { verifyUser} from '../utils/verifyToken.js'


const router = express.Router()



//create, update, delete, like, get single post, get all post
router.get('/test',async (req, res)=>{
    return res.status(200).json({"msg":"hello i am on post route yay"})
})



router.get('/', getAllPost)
router.get('/:id', getSinglePost)
router.post('/create', createPost)
router.put('/:id/update',verifyUser,  updatePost)

router.put('/update')





export default router