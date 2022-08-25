import mongoose from 'mongoose'

const ShopItem = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
    },
    description: {
        type: String,
    }
})

export default mongoose.model('shopitem', ShopItem)