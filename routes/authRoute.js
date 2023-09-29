import { express } from "express";
import { registerController,loginConmtroller} from "../controllers/authController.js";


const router = express.Router()

router.post('/register',registerController);


router.post('/login',loginConmtroller);

export default router

