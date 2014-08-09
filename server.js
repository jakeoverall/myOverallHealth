var express = require('express');
var mongoose = require('mongoose');

var app = express();
var port = 1120;

mongoose.connect('mongodb://localhost/myOverallHealth');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {

    var profileSchema = mongoose.Schema({
        firstName: String,
        lastName: String
    });
    
    var Profile = mongoose.model('Profile', profileSchema);

    //var jake = new Profile({ firstName: 'Jake', lastName: 'Overall' });
    //console.log(jake.firstName + ' ' + jake.lastName);

    //jake.save(function(err) {
    //    if (err) {
    //        return console.error(err);
    //    } else {
    //       return console.log('object: ' + this.firstName + ' ' + this.lastName + ' was saved to the Database');
    //    }
    //});

    //var getProfiles = Profile.find(function(err, profiles) {
    //        if (err) {
    //            return console.error(err);
    //        }
    //        return profiles;
    //    });

    var getProfiles = function () {
        Profile.find(function(err, profiles) {
            if (err) {
                return console.error(err);
            }
            console.log(profiles);
            return profiles;
        });
    };

    app.get('/profiles', function (req, res) {
        var profiles = getProfiles();
        res.status(200).json(profiles);
    });

});


app.listen(port, function() {
    console.log('listening on port:' + port);
})