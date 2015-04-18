/**
 * Created by JAYA on 18-04-2015.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://dbadmin:dbpass@ds061681.mongolab.com:61681/questiondb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('questiondb db opened');
});
var Schema = mongoose.Schema,
    userSchema = new Schema(
        {
            username:String,
            password:String
        }
    );

var  User = db.model('User', userSchema);

exports.getUsers=function(req,res){
    User.find({}).exec(function(err, collection) {
        res.send(collection);
})};

exports.createUsers=function(req,res,next){
    //var m = new User;
    User.create(req.body,function(err,user){
        if(err) {

            res.status(400);
            return res.send({reason:err.toString()});
        }
    });
   // m.save(function (err) {
      //  if (!err) console.log('Success!');
//}
};