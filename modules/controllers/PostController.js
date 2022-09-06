import Post from "../models/post.js";
import {validationResult} from "express-validator";

const PostController = {
    create: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(401).send({message: 'Error title or text is empty'})
                return
            }
            const {title, text} = req.body;

            const post = await new Post({
                title, text
            })
            const savePost = await post.save();
            if (savePost) {
                res.status(201).send(savePost);
                return
            }
            res.status(400).send({message: 'Error post dont created'});
        } catch (e) {
            console.log(e);
            res.status(500).send({message: 'Unknown error'})
        }
    },
    getPosts: async (req, res) => {
        try {
            const foundPost = await Post.find();
            console.log(foundPost)
            if (!foundPost) {
                return res.status(404).send({message: 'Posts not found'})
            }
            return res.status(200).send(foundPost);
        } catch (e) {
            console.log(e);
            res.status(500).send({message: 'Unknown error'})
        }
    }
}

export default PostController;
