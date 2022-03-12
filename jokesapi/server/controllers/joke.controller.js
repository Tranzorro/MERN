const JokeModel = require('../models/joke.model');
const jokeRoutes = require('../routes/joke.routes');

module.exports.getAllJokes = (req, res) => {
    console.log('inside of get all jokes.');
    JokeModel.find({})
        .then(allJokeObjects => {
            console.log("found all the jokes!");
            console.log(allJokeObjects);
            return res.json(allJokeObjects);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}

module.exports.getById = (req, res) => {
    console.log('inside of get a joke by this id.');
    console.log('getting joke by id of: $(req.params._id)');
    JokeModel.findById(req.params._id)
        .then((theJoke) => {
            console.log("found joke by id was successful");
            console.log(theJoke);
            return res.json(theJoke);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}

module.exports.putById = (req, res) => {
    console.log('inside of put a joke by this id.');
    JokeModel.updateOne(req.params._id)
        .then((theUpdatedJoke) => {
            console.log("updated the joke successfully");
            console.log(theUpdatedJoke);
            return res.json(theUpdatedJoke);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}
module.exports.deleteById = (req, res) => {
    console.log('inside of delete a joke by this id.');
    JokeModel.remove(req.params._id)
        .then(removedJoke => {
            console.log("joke wasn't funny enough. incinerated.");
            console.log(removedJoke);
            return res.json(removedJoke);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}
module.exports.createNew = (req, res) => {
    console.log('inside of creat new joke.');
    console.log(req.body);

    JokeModel.create(req.body)
        .then((newJokeObject)=> {
            console.log("new joke created successfully");
            console.log(newJokeObject);
            return res.json(newJokeObject);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}