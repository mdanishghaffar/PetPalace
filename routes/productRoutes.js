import { express } from "express";
import { createProductController } from "../controllers/productcontroller.js";
import formidable from 'express-formidable'

const router =express.Router()

router.post('/create-product',createProductController,formidable())

export default router