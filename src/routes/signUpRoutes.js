const express=require("express")
const signUpRouter=express.Router()


function router(nav){
   signUpRouter.get("/",(req,res)=>{
       res.render("sign-up",{nav})
   })



    return signUpRouter
}

module.exports=router