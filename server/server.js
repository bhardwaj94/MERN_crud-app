const express = require('express');
const morganBody = require('morgan-body');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const user = require('./controller/user.controller.js');
// create express app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());
morganBody(app);
app.use(cookieParser());
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
// listen for requests
app.post('/login',user.login)
app.post('/signup', user.signup);
app.get('/users',user.findAll);

const port = process.env.PORT||3006;
app.listen(port, () => {
    console.log("Server is listening on port 3006");
});