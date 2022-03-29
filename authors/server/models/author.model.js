const  mongoose = require("mongoose");



const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "make it more than 3 characters please."],
        required: [true,"needs a name, duh"],
    },
}, {timestamps: true});

const AuthorModel = mongoose.model("Author", AuthorSchema);

module.exports = AuthorModel;