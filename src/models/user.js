import mongoose from 'mongoose'


const User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        default: '',
    },
    point: {
        type: Number,
        default: 0
    },
    dict: [],
})

export default mongoose.model('user', User)