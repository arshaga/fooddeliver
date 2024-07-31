import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    userId:{type:String, required: true},
    items:{type:Array, required: true},
    amount:{type:Number, required: true},
    address:{type:Object, required: true},
    status:{type:String, default:"Food Processing"},
    date:{type:Date, default:Date.now()},
    payment:{type:Boolean, default:false},
},{timestamps:true})

const model = mongoose.model("order",orderSchema)
export default model