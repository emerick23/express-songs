var mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/songs',
     {useNewUrlParser: true}
 );

 var db = mongoose.connection;
 
 db.on('connected', function() {
 	console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
 });