      import exp from 'express'
        //create mnini express application
        export const producapp=exp.Router()
let products=[]
 producapp.post('/products',(req,res)=>{
            // send res to json
             let newproduct=req.body
            products.push(newproduct)
            res.status(201).json({message:"product created",products})
        })
        //get all products
producapp.get('/products',(req,res)=>{
            // send res to json 
            res.status(200).json({message:"all products",products})
       })
producapp.get('/products/id/:id',(req,res)=>{
let prodid=Number(req.params.id)
      //find id
let productid=products.find(productsid=>productsid.id===prodid) 
//if not found
      if (!productid) {
        return res.status(404).json({ message: "product not found" })
    }
//returns product by id 
      res.status(200).json({message:"id product",productid})
      })
      //get product by name
producapp.get('/products/name/:name',(req,res)=>{
          let prodname1=req.params.name
          //find product by names
      let prodname=products.find(products=>products.name===prodname1) 
       if (!prodname) {
        return res.status(404).json({ message: "product not found" })
    }
 res.status(200).json({message:"name product",prodname})
      })
      //update product by id
producapp.put('/products/id:',(req,res)=>{
let prodidd=Number(req.params.id)
let productbyid=products.find(product=product.id===prodidd)
if(!productbyid)
     return res.status(404).json({ message: "product not found" })
return slice
})
