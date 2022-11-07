// mongodb://localhost:27017
const express = require('express')
const mongoose = require('mongoose')
const product = require('./model/product')
const order = require('./model/order')
const user = require('./model/user')
const connectDB = async () => {
    try {
        const uri = 'mongodb://localhost:27017/web_assignment'
        await mongoose.connect(uri)
        const connect = mongoose.Connection;
        console.log('mongodb connected')
    } catch (e) {
        console.log(e)
    }
}
connectDB()
let app = express()
app.post('/product', async (req, res) => {
    console.log(req)
    console.log(req.body.Product_id)
    try {
        let product = {
            Product_id: req.body?.Product_id || '',
            Product_type: req.body?.Product_type || '',
            Product_name: req.body?.Product_name || '',
            Product_price: req.body?.Product_price || '',
            Available_quantity: req.body?.Available_quantity || ''
        }
        await product.create(product)
        res.send({
            status: 200,
            message: "product added successfully"
        })
    } catch (e) {
        console.log(e)
    }
})
app.post('/order', async (req, res) => {
    try {
        let order = {
            customer_id:req.body.customer_id,
            inventory_id:req.body.inventory_id,
            item_name:req.body.item_name,
            quantity:req.body.quantity
        }
        await order.create(order)
        res.send({
            status: 200,
            message: "order detals added successfully"
        })
    } catch (e) {
        console.log(e)
    }
})
app.post('/user', async (req, res) => {
    try {
        let user = {
            customer_id:req.body.customer_id, 
            customer_name:req.body.customer_name,
            email:req.body.email,
            balance:req.body.balance
        }
        await product.create(product)
        res.send({
            status: 200,
            message: "user added successfully"
        })
    } catch (e) {
        console.log(e)
    }
})
app.get('/products',async(req,res)=>{
   let data= await product.find()
    res.send({status:200,
    data:data})

})
app.get('/users',async(req,res)=>{
    let data= await user.find()
    res.send({status:200,
    data:data}) 
})
app.get('/orders',async(req,res)=>{
    let data= await order.find()
    res.send({status:200,
    data:data})
})

app.listen(3000, () => {
    console.log('server started')
})