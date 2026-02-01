import exp from "express"
import { userapp } from "./userapi.js"
import { connect } from "mongoose"
import { prodapp } from "./productapi.js"
const app=exp()
//connect to db server
async function connectdb() {
    try{
//await -Do not go to next line until MongoDB connection is finished
    await connect('mongodb://localhost:27017/user1')
console.log("success")
//assign port number
app.listen(4000,()=>console.log("server created,running"))
}
catch(err){
    console.log("errr",err)
}
}
connectdb();
//path starrts with user api
app.use(exp.json())
app.use('/user-api',userapp)
app.use('/prodapi',prodapp)
//function error handling
// function errorhandler(err,req,res,next){
//     res.json({message:"error",reason:err.message})
// }
app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",reason:err.message});

    })