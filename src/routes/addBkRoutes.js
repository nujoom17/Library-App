const express=require("express")
const bookData=require("../model/bookData")



const addBkRouter=express.Router()

function router(nav,title){
addBkRouter.get("/",(req,res)=>{
    res.render("addBk",{title,nav})
})

addBkRouter.post("/add",(req,res)=>{
    let item={
    title:req.body.title,
    author:req.body.author,
    genre:req.body.genre,
    image:req.body.image
    }
    let book=bookData(item)
    book.save()
    res.redirect("/books")
    
})

return addBkRouter
}

module.exports=router