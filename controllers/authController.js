import { hash } from "bcrypt";
import { JsonWebTokenError } from "jsonwebtoken";
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";

export const registerController= async (req,res)=>{ 
    try {
        const {name,email,password,phone,address}=req.body
        if (!name){
            return res.send({error:'Name is Required'})
        }
        if (!email){
            return res.send({error:'Emai is Required'})
        }
        if (!password){
            return res.send({error:'Password is Required'})
        }
        if (!phone){
            return res.send({error:'Phone is Required'})
        }
        if (!address){
            return res.send({error:'Address is Required'})
        }

        const existingUser=await userModel.findOne({email})

        if(existingUser)
        {
            return res.status(200).send({
                success:true,
                message:'Already Register Please login'
            })
        }

        const hashedPassword=await hashPassword(password)

        const user=await new userModel({name,email,phone,address,password:hashedPassword}).save()

        res.status(201).send({
            success:true,
            message:'User Register Success',
            user,
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send(
            {
                success:false,
                message:'Error in Registration',
                error
            })
        
    }
};

//Login
export const loginConmtroller=async ()=>{
    try {
        const {email,password}=req.body

        if (!email||!password){
            return res.status(404).send({
                success:false,
                message:"Invalid email or password"
            })
        }
        //check user
        const user=await userModel.findOne({email})
        if (!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered',
            })
        }
        const match=await comparePassword(password,user.password)
        if (!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password",
            }) 
        }
        const token =await JWT.sign({_id:user.id},process.env.JWT_SECRET,{
                expiresIn:'7d',
        })
        res.status(200).send({
            success:true,
            message:"Login successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
            },
            token,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send(
            {
                success:false,
                message:'Error in Login',
                error
            })
    }
}