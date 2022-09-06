import User from "../models/user.js";
import {validationResult} from "express-validator";
import {generateAccessToken} from "../../utils/generateAccessToken.js";

const UserController = {
    login: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(401).send({message: 'Error email or password'})
                return
            }
            console.log(errors)
            const {email, password} = req.body;
            const candidate = await User.findOne({email});
            console.log(candidate)
            if (candidate) {
                const {password: passwordFoundAccount} = candidate;
                if (password === passwordFoundAccount) {
                    const token = generateAccessToken(email, password)
                    const userData = {email, token};
                    console.log(userData)
                    res.status(401).send(userData) //ошибка должен быть статус 200
                    return;
                }
                res.status(401).send({message: 'Error email or password'})
                return
            }
            // console.log(candidate);
            res.status(404).send({message: 'User not found'})
        } catch (e) {
            console.log(e);
            res.status(500).send({message: 'Error'})
        }
    },
    register: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(401).send({message: 'Error email or password'})
                return
            }
            console.log(errors)
            const {email, password} = req.body;
            const candidate = await User.findOne({email});
            if (!candidate) {
                const newUser = new User({
                    email, password
                })
                const user = await newUser.save();
                console.log(user);
                res.status(201).send(user)
                return
            }
            console.log(candidate);
            res.status(401).send({message: 'User was been created'})
        } catch (e) {
            console.log(e);
            res.status(500).send({message: 'Error'})
        }
    }
}

export default UserController;