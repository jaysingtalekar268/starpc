const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    desc: String,
    mrp: Number,
    price: Number,
    model_no: String,
    p_type:String,
    brand:String,
    catg: String,
    stock: Number,
    rating: Number,
    offer:String,
    offer_discount:Number,
    sell_count: Number,
    date: Date,
    img: [{ type: String }]


});

module.exports = mongoose.model("projects", userSchema);