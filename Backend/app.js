const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=new express();
const bookDetails=require('./models/library')
const router=express.Router()

app.use(express.json())  //to receive data from front end
app.use(express.urlencoded({extended:true}))
app.use(cors()) 

const path = require('path');
app.use(express.static('./dist/frontend'));
 


mongoose.connect('mongodb+srv://Nufeejasameer:Ikkakku123@cluster0.d2fsqtu.mongodb.net/dataDB?retryWrites=true&w=majority')
.then((res,req)=>{
    console.log("Mongodb successfully connected")
})
.catch((req,res)=>{
    console.log("Mongodb not connected")
})

const api=require('./routes/api')
app.use('/api',api)

// app.get('/home',async(req,res)=>{
//     try {
//         const list=await bookDetails.find()
//         res.send(list)
//     } 
//     catch (error) {
//         console.log(error)
//     }
//     })
   
// router.get('/blog',async(req,res)=>{
//     try {
//         const list=await bookDetails.find()
//         res.send(list)
//     } 
//     catch (error) {
//         console.log(error)
//     }
//     })

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));;
   });

app.listen(5000)