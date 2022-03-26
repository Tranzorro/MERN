const ProductModel = require('../models/product.model');
const productRoutes = require('../routes/product.routes');

module.exports.getAllProducts = (req, res) => {
    console.log('inside of get all Products.');
    ProductModel.find({})
        .then(allProductObjects => {
            console.log("found all the products!");
            console.log(allProductObjects);
            return res.json(allProductObjects);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}

module.exports.getById = (req, res) => {
    console.log('inside of get a product by this id.');
    console.log('getting product by id of: $(req.params._id)');
    ProductModel.findById(req.params._id)
        .then((theProduct) => {
            console.log("found Product by id was successful");
            console.log(theProduct);
            return res.json(theProduct);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}

module.exports.putById = (req, res) => {
    console.log('inside of put a Product by this id.');
    ProductModel.findOneAndUpdate({_id: req.params._id},
        req.body,
        {
            new: true,
            runValidators: true
        }
        )
        .then((theUpdatedProduct) => {
            console.log("updated the Product successfully");
            console.log(theUpdatedProduct);
            return res.json(theUpdatedProduct);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.status(400).json(err);
        })
}
module.exports.deleteById = (req, res) => {
    console.log('inside of delete a Product by this id.');
    ProductModel.deleteOne({_id: req.params._id})
        .then(removedProduct => {
            console.log("Product wasn't productive enough. deleted.");
            console.log(removedProduct);
            return res.json(removedProduct);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}
module.exports.createNew = (req, res) => {
    console.log('inside of creat new Product.');
    console.log(req.body);

    ProductModel.create(req.body)
        .then((newProductObject)=> {
            console.log("new Product created successfully");
            console.log(newProductObject);
            return res.json(newProductObject);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}