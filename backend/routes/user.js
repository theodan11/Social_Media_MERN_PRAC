import express from "express";
import { verifyUser } from "../utils/verifyToken.js";
import { updateUser, getUser, followUser, unfollowUser } from "../controller/userController.js";

const router = express.Router()


router.get('/:id', getUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unfollowUser)
router.put('/update/:id', verifyUser, updateUser)


export default router