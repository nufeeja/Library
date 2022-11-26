const express=require('express')

const router=express.Router()
const DATA=require('../models/library')
const userdetails=require('../models/userdetails')


//userdetails api

router.post('/signup',(req,res)=>{
    const user=new userdetails({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        genter:req.body.genter
    })

    user.save()
    .then(()=>{
        res.json({success:true,message:"Account has been created"})
    })
    .catch((err)=>{
        res.json({success:false,message:err})
    })
})


router.post('/login',async(req,res)=>{
    try {
        const email = req.body.email;
        const password=req.body.password;
       
     
        const useremail=await userdetails.findOne({"email":email});
        if(useremail.password===password){
           // res.status(201).render('index');
            res.json('valid login details')
        }
        else{
            res.json('invalid login details')
        }
    } catch (error) {
        res.status(400).send('invalid login details')
    }
})

//book api
router.post('/libraryEntry',(req,res)=>{
        let data=req.body
        const book=new DATA(data)
        book.save((error,data)=>{
            // if(error){
            //     res.json({'status':"error"})
            // }
            // else{
            //    res.json({"status":"success","data":DATA})
            // }
        })
         res.send(data)
    })


   router.get('/booklist',async(req,res)=>{
    // try {
    //     const list=await db.DATA.find()
    //     res.send(list)
    // } catch (error) {
    //     console.log(error)
    // }

    DATA.find().then(function(data){
        res.json(data)
    })
   })
   
    



        router.post('/bookupdate/:id',async(req,res)=>{
            let data=req.body
            await DATA.updateOne({"_id":req.body._id},data)
            res.json({"status":"success"})
        })




router.get('/singlebook/:id',(req,res)=>{
    DATA.findOne({"_id":req.params.id}).then(function(data){
        res.send(data)
    })
})


// router.post('/bookupdate/:id',async(req,res)=>{
//     try {
//         const updatebook=await DATA.findByIdAndUpdate(req.params.id)
//       res.json({"status":"success"})
//     } catch (error) {
      
//     }
           
//         })
       

        router.delete('/deletebook/:id',async(req,res)=>{
    try {
        const deletebook=await DATA.findByIdAndDelete(req.params.id)
      res.json({"status":"success"})
    } catch (error) {
      
    }
           
        })
       


        // router.post('/bookupdate/:id',(req,res)=>{
        //     let id =req.params.id
        //  DATA.findByIdAndUpdate(id,{bookname:req.body.bookname,authorname:req.body.authorname,published:req.body.published,description:req.body.description}).then(function(data){
        //     res.send(data)
        //  })
        
        //    })

        router.put('/bookupdate/:id',(req,res)=>{
            DATA.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },(err,data)=>{
                if(err){
                    return next(err)
                }else{
                    res.json(data);
                    console.log("success")
                }
            })
        })

module.exports=router