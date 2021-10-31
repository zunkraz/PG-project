const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const country = new Schema({
        name: {
            type: String,
            unique: true
        },
        users: [{
            type: Schema.Types.ObjectId, ref: 'users'
        }]
});

const Country = mongoose.model('countries', country);

module.exports = Country;