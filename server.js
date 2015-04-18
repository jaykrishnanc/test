/**
 * Created by JAYA on 18-04-2015.
 */
var express = require('express'),
    app = express(),
    bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
var user=require('./server/mongoose');
app.use(express.static(__dirname+'/public'));
app.get('/api/user',user.getUsers);
app.post('/api/user',user.createUsers);

app.listen(5000,function(){
    console.log("Servet started on 5000")
    });