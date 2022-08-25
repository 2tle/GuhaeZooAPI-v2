import mongoose from 'mongoose'

const Image = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    imgType: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
    },
    image: {
        type: Buffer,
    },
})

export default mongoose.model('image',Image)