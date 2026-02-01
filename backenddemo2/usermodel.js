
import { Schema,model } from "mongoose";
//cretae user schema
const UserSchema=new Schema({
username:{
    type:String,
    required:[true,"usernaem is not supplied"],
    minLength:[3,"min should be 4"],
    maxLength:[6," exceeded length "]
 },
 password:{
    type:String,
    required:[true,"passowrd is required"]
 },
 age:{
    type:Number,
    required:[true,"age is required"],
    min:[18,"age should be 18"],
    max:[23,"age shoudl not be greater than 23"]
 }

})
//cretae user model with tht schema
export const UserModel=model("user",UserSchema)