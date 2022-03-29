const authorController = require("../controllers/author.controller");

module.exports = (App) => {

    App.get('/api/authors/getAll', authorController.getAllAuthors);
    App.post('/api/authors/create', authorController.createNew);
    App.get('/api/authors/:_id', authorController.getById);
    App.put('/api/authors/edit/:_id', authorController.putById);
    App.delete('/api/authors/delete/:_id', authorController.deleteById);
}