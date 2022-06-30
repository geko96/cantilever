
const mongoose = require('mongoose');

const URL = process.env.MONGODB_URI || 'mongodb://localhost/cantilever';

const connection = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = connection;