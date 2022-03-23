const productController = require("../controllers/product.controller");

module.exports = (App) => {

    App.get('/api/products/getAll', productController.getAllProducts);
    App.post('/api/products/create', productController.createNew);
    App.get('/api/products/:_id', productController.getById);
    App.put('/api/products/:_id', productController.putById);
    App.delete('/api/products/:_id', productController.deleteById);
}