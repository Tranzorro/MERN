const express = require("express");
const cors = require("cors");
const App = express();
App.use(express.json());
App.use(express.urlencoded({extended: true}));
App.use(cors());

require("./config/mongoose.config");

// App.get('/', (req,res) =>{
//     return res.json({ message: "sup ninja."});
// })

const productRoutes = require("./routes/product.routes");
productRoutes(App);

App.listen(8000, () => {
    console.log("you successfully started the server on port 8000");
})