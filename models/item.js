const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = item = mongoose.model('item',ItemSchema);
