const mongoose=require('mongoose')

const Schema=mongoose.Schema

const userSchema=new Schema({
    username:String,
    email:String,
    password:String,
    genter:String
})

let userdetails=mongoose.model('userdetails',userSchema)

module.exports=userdetails