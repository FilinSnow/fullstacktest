import {Router} from "express";

import {body} from "express-validator";
import PostController from "../controllers/PostController.js";
import {authMiddleware} from "../../middleware/authMiddleware.js";

const router = Router();

router.post(
    '',
    body('title').isLength({ min: 3 }),
    body('text').isLength({ min: 3 }),
    authMiddleware,
    PostController.create
);
router.get(
    '',
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 5 }),
    PostController.getPosts
)

export default router;