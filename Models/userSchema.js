const mongoose = require('mongoose')

// 2 sschema creation
const userSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    github : {
        type:String,
    },
    linkedIn : {
        type:String,
    },
    profilePic : {
        type:String,
    }
    
})

// 3 model creation / excat same as mongodb collection
const users = mongoose.model('users',userSchema)

module.exports=users