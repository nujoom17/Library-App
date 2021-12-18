const express=require("express")
const authorRouter=express.Router()
const authorData=require("../model/authorData")

function router(nav,title){
//     let authors=[
//         {
//         name: "Stephen Hawking",
//         DOB:"8th January 1942",
//         education:"PhD Physics",
//         image:"/images/stephen.jpg"
//         },
//        {
//         name: "Stan Lee",
//         DOB:"28th December 1922",
//         education:"High School/Editorial Literature",
//         image:"/images/stanlee.jpg"
//         },
//         {
//         name: "Arthur Conan Doyle",
//         DOB:"22nd May 1859",
//         education:"Doctor of Medicine",
//         image:"/images/arthur.jpg"
//         }
// ]

authorRouter.get("/",(req,res)=>{
    authorData.find()
    .then(function(authors){
          res.render("authors",{nav,title,authors})
    })

})

authorRouter.get("/:id",(req,res)=>{
    const id=req.params.id
    authorData.findOne({_id:id})
    .then(function(author){
     res.render("author",{nav,title,author})
    })
    
})

return authorRouter
}

module.exports=router