import express from "express";
import { verifyUser } from "../utils/verifyToken.js";
import { updateUser } from "../controller/userController.js";

const router = express.Router()


router.put('/update/:id', verifyUser, updateUser)



export default router