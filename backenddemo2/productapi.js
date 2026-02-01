import exp from "express"
export const prodapp=exp.Router();
import { prodmodel } from "./MODELS/productmodel.js";

//post
prodapp.post('/products',async(req,res)=>{
let newproduct=req.body
//create document
let proddoc=new prodmodel(newproduct)
proddoc.save()
res.status(200).json(proddoc)
})
//get all products
prodapp.get('/products',async(req,res)=>{
 let products=await prodmodel.find()
     res.status(200).json(products)
})
//get products by id
prodapp.get('/products/:id',async(req,res)=>{
    let proddid=req.params.id
    let id=await prodmodel.findById(proddid)
    res.status(200).json(id)
})
//put productsbyid
prodapp.put('/products/:id',async(req,res)=>{
    let prodid=req.params.id
    let modified=req.body
    let id1=await prodmodel.findByIdAndUpdate(prodid,{$set:{...modified}},{new:true})
    res.status(200).json(id1)
})
//push review
prodapp.put('/products/:id/review',async(req,res)=>{
    let prodd=req.body
    let proddidd=req.params.id
    let idr=await prodmodel.findByIdAndUpdate(proddidd,{$push:{review:{...prodd}}},{new:true})
    res.status(200).json(idr)
})
//delete prod by id
prodapp.delete('/products/:id',async(req,res)=>{
    let delid=req.params.id
    let delprod=await prodmodel.findByIdAndDelete(delid)
    res.status(200).json(delprod)
})