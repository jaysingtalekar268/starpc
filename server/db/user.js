const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    phone: String,
    cart: [{ type: String }]
});

module.exports = mongoose.model("users", userSchema);