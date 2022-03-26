const  mongoose = require("mongoose");



const ProductSchema = new mongoose.Schema({
    Title: {
        type: String,
        message: "needs a name, duh",
        minlength: 4,
        required: [true,"needs a name, duh"],
    },
    Price: {
        type: Number,
        required: [true,"how expensive is it?"],
        minlength: 1,
    },
    Description: {
        type: String,
        required: [true,"what is it?"],
        minlength: 10,
    },
}, {timestamps: true});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;