//spotify idconst mongoose = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');



const UserSchema = new Schema({
  spotifyId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
})

UserSchema.plugin(findOrCreate);
module.exports = User = mongoose.model('users', UserSchema);