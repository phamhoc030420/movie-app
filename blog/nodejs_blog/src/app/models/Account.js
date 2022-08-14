const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const Account = new Schema({
    // _id: { type: Number, },
    username: { type: String, required: true },
    password: { type: String, maxlength: 600 },
},{
    // _id: false,
});
mongoose.plugin(slug);
// Account.plugin(AutoIncrement);
// Account.plugin(AutoIncrement);
module.exports = mongoose.model('Account', Account);