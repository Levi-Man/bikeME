const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bikeDB');
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://MERNSearch:bEwdIHNJp95SAX2m@cluster0.wkoffnc.mongodb.net/bikeDB?retryWrites=true&w=majority')


module.exports = mongoose.connection;
