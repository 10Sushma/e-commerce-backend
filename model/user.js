const mongoose=require("mongoose")
const Schema=mongoose.Schema

const userSchema=Schema({
    customer_id:{
        type:String,
        require:true,
    }, 
    customer_name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    balance:{
        type:String,
        require:true,
    }
})
module.exports=mongoose.model('user',userSchema);
