//dependency import
import express from "express";

//import controllers
import {getUserById, createUser} from "../controllers/user.js";

//router initialization
const router = express.Router()

//routes
router.get('/:id', getUserById)
router.post('/', createUser)
//TODO: add delete and update

export default router