import { Schema,model } from "mongoose";
    const productSchema=new Schema({
prodname:{
    type:String,
    required:[true,"usernaem is not supplied"],
    minLength:[3,"min should be 4"],
    maxLength:[8," exceeded length "]
 },
 pid:{
    type:Number,
    required:[true,"age is required"],
     minLength:[3,"id should be recognizable"],
    maxLength:[1000," exceeded length "]
 },
price:{
    type:Number,
    required:[true,"price is required"],
    minLength:[3,"price should be valid"],
    maxLength:[1000," exceeded length "]

},
review:{
    rating: Number,
    comments: String
}
})
//cretae user model with tht schema
export const prodmodel=model("product",productSchema)
