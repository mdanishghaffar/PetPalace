import productModel from '../models/productModel'
import fs from 'fs'
export const createProductController = async (req,res)=>{

    try {
        const {}
// const{ptitle,pdescription,category,price,adopt,quantity,picture,shipping} =req.fields
// const {picture}=req.files
} catch (error) {
console.log(error)
res.status(500).send({
success:false,
error,
message:'Error in creating the product'
})
}
}