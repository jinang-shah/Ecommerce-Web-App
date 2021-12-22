// const express = require('express')
// const mongoose = require('mongoose')
// const router = express.Router()
// const User = mongoose.model('User')
// const bcrypt=require('bcryptjs')

// const signUpUser = async (req,res)=>{
//     const {name, email, password} = req.body
//     if(!email || !name || !password){
//         return res.status(422).json({err:"please add all the fields!!"})
//     }
//     User.findOne({email:email})
//     .then((savedUser)=>{
//         if(savedUser){
//             return res.status(422).json({error:"user already exists with that email"})
//         }
//         bcrypt.hash(password,12)
//         .then(hashedPassword=>{
//             const user=new User({
//                 email,
//                 password:hashedPassword,
//                 name
//             })
//             user.save()
//             .then(user=>{
//                 res.json({message:"saved successfully!!"})
//             })
//             .catch(error=>{
//                 console.log(error)
//             })
//         })
         
//         })
//         .catch(error=>{
//             console.log(error)
//     })
// }

// module.exports = {
//     signUpUser
//   };