import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.ObjectId,
        ref:'product'
    },
    quality:{
        type:Number,
        default:1
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
},{
    timestamps:true
})

const CartProductModel = mongoose.model("cartProduct",cartProductSchema)

export default CartProductModel;