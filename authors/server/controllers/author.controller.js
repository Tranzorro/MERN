const authorModel = require('../models/author.model');
const authorRoutes = require('../routes/author.routes');

module.exports.getAllAuthors = (req, res) => {
    console.log('inside of get all authors.');
    authorModel.find({})
        .then(allAuthorObjects => {
            console.log("found all the authors!");
            console.log(allAuthorObjects);
            return res.json(allAuthorObjects);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}

module.exports.getById = (req, res) => {
    console.log('inside of get a author by this id.');
    console.log('getting author by id of: $(req.params._id)');
    authorModel.findById(req.params._id)
        .then((theAuthor) => {
            console.log("found author by id was successful");
            console.log(theAuthor);
            return res.json(theAuthor);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}

module.exports.putById = (req, res) => {
    console.log('inside of put an author by this id.');
    authorModel.findOneAndUpdate({_id: req.params._id},
        req.body,
        {
            new: true,
            runValidators: true
        }
        )
        .then((theUpdatedAuthor) => {
            console.log("updated the author successfully");
            console.log(theUpdatedAuthor);
            return res.json(theUpdatedAuthor);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.status(400).json(err);
        })
}
module.exports.deleteById = (req, res) => {
    console.log('inside of delete an author by this id.');
    authorModel.deleteOne({_id: req.params._id})
        .then(removedAuthor => {
            console.log("Author was a terrible writer, deleted.");
            console.log(removedAuthor);
            return res.json(removedAuthor);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}
module.exports.createNew = (req, res) => {
    console.log('inside of creat new author.');
    console.log(req.body);

    authorModel.create(req.body)
        .then((newAuthorObject)=> {
            console.log("new author created successfully");
            console.log(newAuthorObject);
            return res.json(newAuthorObject);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}