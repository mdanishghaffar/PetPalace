import mongoose from "mongoose";

const productModel=new mongoose.Schema({
    ptitle:{ type:String,required:true},
    pdescription:{ type:String,required:true },
    category:{type:mongoose.ObjectId,ref:"Catrgory",required:true},
    price:{type:Number,required:true},
    adopt:{type:Boolean,required:true},
    quantity:{type:Boolean},
    picture:{type:Buffer,contentType:String,required:true},
    shipping:{type:Boolean}

},{timestamps:true})

export default mongoose.productModel('Products',productModel)
