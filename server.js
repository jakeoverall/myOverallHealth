var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongo = require('mongodb');



var app = express();
var port = 1120;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/myOverallHealth');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {

    var profileSchema = mongoose.Schema({
        firstName: String,
        lastName: String
    });

    var Profile = mongoose.model('Profile', profileSchema);


    //Routes
    app.get('/profiles', function (req, res) {
        Profile.find({}, function(err, profiles) {
            var profileMap = {};
            profiles.forEach(function(profile) {
                profileMap[profile._id] = profile;
            });
            res.status(200).json(profileMap);
        });
    });
    console.log('Db is set to ' + db.name);
});




app.listen(port, function () {
    console.log('listening on port:' + port);
});