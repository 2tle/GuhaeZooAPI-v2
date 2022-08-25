import mongoose from 'mongoose'

const Barcode = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    barcode: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    photo: {
        type: String,
    }
})

export default mongoose.model('barcode', Barcode)