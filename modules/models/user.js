import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String},

})
const User = mongoose.model('users', UserSchema);

export default User;