var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    songOne: String,
    songTwo: String,
    songThree: String,
    songFour: String,
    SongFive: String,
    hashed_password: String
});
mongoose.model('User', UserSchema);
