
const mongoose = require('mongoose');

const URL = process.env.MONGODB_URI || 'mongodb+srv://geko96:German.96@cluster0.i3x0l.mongodb.net/cantilever?retryWrites=true&w=majority';

const connection = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = connection;