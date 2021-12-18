const express=require("express")
const signInRouter=express.Router()


function router(nav){
   signInRouter.get("/",(req,res)=>{
       res.render("sign-in",{nav})
   })



    return signInRouter
}

module.exports=router