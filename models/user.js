const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  secondName: String,
  password: String
});

const User = mongoose.model('Users', userSchema);

module.exports.user = User;

/*
const my_user = new User({
  userName: 'Daniel',
  secondName: 'Mauricio',
  password: '123b'
});


User.find(function (err, users) {
  if (err) return console.error(err);
  console.log(users);
  mongoose.disconnect();
})
*/

/*
my_user.save(function(err, my_user) {
  if(err) return console.error(err);

  console.log('Saved!');
  mongoose.disconnect();
});

*/
/*module.exports.user = User;

/*
var myUser = new User({
  userName: 'Daniel',
  secondName: 'Simon',
  password: '123a'
});

console.log(myUser.userName);

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
myUser.save(function (err, myUser) {
    if (err) return console.error(err);
    console.log('Saved');
    mongoose.disconnect();
  });
*/
