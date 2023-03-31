import {Schema} from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const User = mongoose.model('User', userSchema)
export default User