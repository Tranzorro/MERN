const jokeController = require("../controllers/joke.controller");

module.exports = (app) => {

    app.get('/api/jokes/getAll', jokeController.getAllJokes);
    app.get('/api/jokes/:_id', jokeController.getById);
    app.put('/api/jokes/:_id', jokeController.putById);
    app.delete('/api/jokes/:_id', jokeController.deleteById);
    app.post('/api/jokes/create', jokeController.createNew);
}