require('dotenv').config();

const mongoose = require('mongoose');

const URL = process.env.MONGODB_URI || `mongodb+srv://${process.env.DBUSER}:${process.env.PASS}@cluster0.i3x0l.mongodb.net/cantilever?retryWrites=true&w=majority`;

const connection = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = connection;