const mongoose = require('mongoose');
const databaseName = "Products";

mongoose.connect('mongodb://127.0.0.1:27017/' + databaseName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Established a connection to ' + databaseName + "database"))
.catch(err => console.log('something went wrong, could not connect to ' + databaseName + "database", err));