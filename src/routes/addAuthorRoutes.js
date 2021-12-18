const express=require("express")
const authorData=require("../model/authorData")
const addAuthorRouter=express.Router()

function router(nav,title){
    addAuthorRouter.get("/",(req,res)=>{
        res.render("addAuthor",{nav,title})
    })
   addAuthorRouter.post("/add",(req,res)=>{
       let item={
           name:req.body.name,
           DOB:req.body.DOB,
           education:req.body.education,
           image:req.body.image
       }
       let author=authorData(item)
       author.save()
       res.redirect("/authors")
   })
  return addAuthorRouter

}

module.exports=router