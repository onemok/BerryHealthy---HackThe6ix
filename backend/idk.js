var mongoose = require(mongoose)
var Children = require('./Models/children_model');
     
// create a user a new user
var testUser = new User({
    username: 'jmar777',
    password: 'Password123'
});
     
// save the user to database
testUser.save(function(err) {
    if (err) throw err;
});
    
// fetch the user and test password verification
User.findOne({ username: 'jmar777' }, function(err, user) {
    if (err) throw err;
     
    // test a matching password
    user.comparePassword('Password123', function(err, isMatch) {
        if (err) throw err;
        console.log('Password123:', isMatch); // -&gt; Password123: true
    });
     
    // test a failing password
    user.comparePassword('123Password', function(err, isMatch) {
        if (err) throw err;
        console.log('123Password:', isMatch); // -&gt; 123Password: false
    });
});