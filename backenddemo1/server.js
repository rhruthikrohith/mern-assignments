                      //create httpp server//
    //import express moulde
  import exp from "express";
  import { userapp } from './apis/userapi.js'
  import { producapp } from './apis/productapi.js'
//create server
  const app=exp()
  //asssign port number
  app.listen(3000,()=>console.log('http server running on port 1430'))
  ////body parsing middleware
app.use(exp.json())
app.use('/user-api',userapp)
app.use('/product-api',producapp)
// //cresate custom kmiddleware
// function middleware1(req,res,next){
//   console.log("middleare executed")
//   //res.json({message:"message from res"})
//   //foward req to next
//   next()
// }

// //excute middleware for every req
// app.use(middleware1)
// // create api(req handlers - route)
// //test local in memory

       


// http req types////////
//get-read resources
///post-create new resources
//put-update resource
//delete-delete a resource
////user api//



//