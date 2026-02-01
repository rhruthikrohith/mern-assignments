    import exp from "express";
    //user api mini router
    export const userapp=exp.Router();
    //import model exported from usermodel
    import { UserModel } from "./MODELS/usermodel.js";

            //user api routes
            //cretae user


            //read user
    userapp.get('/user',async(req,res)=>{

        //read users from db
        let Users=await UserModel.find()//find users
        res.status(200).json(Users)//gives all users
    })
                    //create user
    userapp.post('/users',async(req,res)=>{
    // get newuser fom req
        let NewUser=req.body;
    //create new user document\
    let NewUserdoc=new UserModel(NewUser)
    NewUserdoc.save()
    console.log(NewUserdoc)
    })
                    //read user
                    userapp.get("/user1/:id",async(req,res)=>{
                        //get objid
    let objid=req.params.id;
    //find user in db
    let id=await UserModel.findById(objid)
    //send res
    res.status(200).json(id)
                        })
                        ///update user
                        userapp.put('/users/:id',async(req,res)=>{
                            let objjid=req.params.id
                            let modified=req.body
                            let latestuser=await UserModel.findByIdAndUpdate(objjid,{$set:{...modified}},{new:true})
                            res.status(200).json(latestuser)
                        });
    userapp.delete('/users/:id',async(req,res)=>{
        let objid=req.params.id
        let deluser=await UserModel.findByIdAndDelete(objid)
    res.status(200).json(deluser)
    })




    // userapp.get('/user',(req,res)=>{
    // res.status(200).json("get is running")
    // })