const express=require("express")
const booksRouter=express.Router()
const bookData=require("../model/bookData")


function router(nav,title){
// let books=[
    //  {title:"A Brief History of Time",
    // author:"Stephen Hawking",
    // genre: "Space/Research",
    // image:"/images/stephen.jpg"
    // },
    //  {title:"The Amazing Spider-man",
    // author:"Stan Lee",
    // genre: "Action/Fiction",
    // image:"/images/spidey.jpg"
    // },
    // {title:"Sherlock Holmes",
    // author:"Arthur Doyle",
    // genre: "Science-Fiction",
    // image:"/images/sherlock.jpg"
    // },
// ]

booksRouter.get("/",(req,res)=>{
    bookData.find()
    .then(function(books){
        res.render("books",{books,nav,title})
    })
    
})


booksRouter.get("/:id",(req,res)=>{
    const id=req.params.id;
    bookData.findOne({_id:id})
    .then(function(bk){
      res.render("bk",{bk,nav,title})
    })
    
})
return booksRouter
}
module.exports=router;

