const mongoose = require('mongoose')

const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')

// Register logic
exports.registerAPI=async(req,res)=>{
    console.log("Inside Register API");
    const {username,email,password}=req.body;
    // if user already in db?
    const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(402).json({message:'user aleady existing...'})
        }
        else{
            const newUser = new users({
                username:username,
                email:email,
                password:password,
                github:'',
                linkedIn:'',
                profilePic:''
            })
            // to save the details in mongodb
            await newUser.save()
            res.status(200).json('user registration successfull...')
        }
}

// Login logic
exports.LoginAPI=async(req,res)=>{
    console.log("Inside LoginAPI");
    const {email,password}=req.body;
    try {
        const existingUser = await users.findOne({email})
        if(existingUser){
            
            const token = jwt.sign({userId:existingUser._id},process.env.jwtKey)
            console.log(token);
            
            res.status(200).json({currentUser:existingUser,token})
        }
        else{
            res.status(404).json("Incorrect email or password")
        }
        
    } catch (err) {
        res.status(401).json(err)
    }
    
}


    

