const mongoose=require("mongoose")
const Schema=mongoose.Schema
const poductSchema=Schema({
    Product_id:{
        type:String,

    }, Product_type:{
        type:String,
        require:true,
    }, Product_name:{
        type:String,
        require:true,
    }, Product_price:{
        type:String,
        require:true,
    }, Available_quantity:
    {type:String,
    require:true,}


})
module.exports=mongoose.model('product',poductSchema);