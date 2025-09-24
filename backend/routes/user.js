import express from "express";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
import { updateUser, getUser, followUser, unfollowUser, getFollowers } from "../controller/userController.js";

const router = express.Router()


router.get('/:id', getUser)
router.get('/get/followers', verifyToken, getFollowers)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unfollowUser)
router.put('/update/:id', verifyUser, updateUser)


export default router