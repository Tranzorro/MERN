const  mongoose = require("mongoose");



const ProductSchema = new mongoose.Schema({
    Title: {
        type: String,
        message: "needs a name, duh",
        minlength: [4, "make it more than 4 characters please."],
        required: [true,"needs a name, duh"],
    },
    Price: {
        type: Number,
        required: [true,"how expensive is it?"],
        minlength: [1, "needs to be at least not blank my dude."],
    },
    Description: {
        type: String,
        required: [true,"what is it?"],
        minlength: [10,"use your words..."],
    },
}, {timestamps: true});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;