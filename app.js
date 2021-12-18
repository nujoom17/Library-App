const express=require("express")

const app=express()

let title="Library Application"
let nav=[
    {link:"/books",name:"Books"},
    {link:"/authors",name:"Authors"},
    {link:"/addbk",name:"Add Book"},
    {link:"/addAuthor",name:"Add Author"},
    {link:"/sign-in",name:"Sign In"},
    {link:"/sign-up",name:"Sign Up"}
    ]

const booksRouter=require("./src/routes/bookRoutes")(nav,title)
const authorRouter=require("./src/routes/authorRoutes")(nav,title)
const addBkRouter=require("./src/routes/addBkRoutes")(nav,title)
const signUpRouter=require("./src/routes/signUpRoutes")(nav)
const signInRouter=require("./src/routes/signInRoutes")(nav)
const addAuthorRouter=require("./src/routes/addAuthorRoutes")(nav,title)
app.use(express.urlencoded({extended:true}))
app.use(express.static("./public"))


app.set("view engine","ejs")
app.set("views","./src/views")




app.use("/books",booksRouter)
app.use("/authors",authorRouter)
app.use("/addBk",addBkRouter)
app.use("/addAuthor",addAuthorRouter)
app.use("/sign-up",signUpRouter)
app.use("/sign-in",signInRouter)


app.get("/",(req,res)=>{
    res.render("index",{
        title,nav
    })
})


app.listen(5300)

// const http=require("http")
// const fs=require("fs")
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type": "text/html"})
//     fs.readFile("index.html",(error,data)=>{
//         if (error){
//          res.writeHead(404)
//          res.write("File Error")
//         }
//         else{
//             res.write(data)
//         }
//          res.end()
//     })
   
// })

// server.listen(5300)