const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./config/mongoose.config");

app.get('/', (req,res) =>{
    return res.json({ message: "sup ninja."});
})

const jokeRoutes = require("./routes/joke.routes");
jokeRoutes(app);

app.listen(8000, () => {
    console.log("you successfully started the server on port 8000");
})