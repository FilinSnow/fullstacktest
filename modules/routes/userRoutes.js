import {Router} from "express";
import UserController from "../controllers/UserController.js";
import {body} from "express-validator";

const router = Router();

router.post(
    '/register',
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 5 }),
    UserController.register
);
router.post(
    '/login',
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 5 }),
    UserController.login
)

export default router;