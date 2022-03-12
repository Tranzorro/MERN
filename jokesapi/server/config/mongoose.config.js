const mongoose = require('mongoose');
const databaseName = "Jokes";

mongoose.connect('mongodb://localhost/' + databaseName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Established a connection to ' + databaseName + "database"))
.catch(err => console.log('something went wrong, could not connect to ' + databaseName + "database", err));