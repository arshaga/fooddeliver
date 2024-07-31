import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{timeStamp:true})

const model = mongoose.model("food",foodSchema)
export default model
