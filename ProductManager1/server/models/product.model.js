const  mongoose = require("mongoose");



const ProductSchema = new mongoose.Schema({
    Title: {
        type: String,
        minlength: 4,
    },
    Price: {
        type: Number,
        minlength: 1,
    },
    Description: {
        type: String,
        minlength: 10,
    },
}, {timestamps: true});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;