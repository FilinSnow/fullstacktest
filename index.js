import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import userRoutes from "./modules/routes/userRoutes.js";
import postsRoutes from "./modules/routes/postsRoutes.js";


const app = express();
const PORT = 5500;

app.use(express.json())
app.use(cors())
mongoose.connect(
    'mongodb+srv://user:user@cluster0.xib4dgm.mongodb.net/?retryWrites=true&w=majority',
    () => {
        console.log("mongdb is connected");
    }
);

app.use('/api/auth', userRoutes);
app.use('/api/posts', postsRoutes);

app.listen(PORT, () => {
    console.log(`Server was been started ${PORT}`)
})