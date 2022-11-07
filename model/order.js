const mongoose=require("mongoose")
const Schema=mongoose.Schema
const orderSchema=Schema({
    customer_id:{
        type:String,
        require:true
    }, inventory_id:{
        type:String,
        require:true,
    },
    item_name:{
        type:String,
        require:true,
    },
    quantity:{
        type:String,
        require:true,
    }

})
module.exports=mongoose.model('order',orderSchema);