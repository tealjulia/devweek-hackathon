//spotify id
//entries


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  user: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  emotion: {
    type: [String]
  },
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = Entry = mongoose.model('entries', EntrySchema);