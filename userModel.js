const mongoose = require('./connect');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  password: String,
});
exports.User = mongoose.model('User', userSchema);
