
const mongoose=require('mongoose')

const Schema=mongoose.Schema

const bookSchema=new Schema({
   
    bookname:String,
   authorname:String,
   published:String,
   description:String,
  
    })

let bookdetails=mongoose.model('bookdetails',bookSchema)

module.exports=bookdetails