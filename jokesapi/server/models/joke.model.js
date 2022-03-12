const { default: mongoose } = require("mongoose");



const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength: 4,
    },
    punchline: {
        type: String,
        minlength: 1,
    },
}, {timestamps: true});

const JokeModel = mongoose.model("Joke", JokeSchema);

module.exports = JokeModel;