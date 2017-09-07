const express = require ('express');
const path = require ('path');
const bodyParser= require ('body-parser');
const cors = require ('cors');
const passport = require ('passport');
const mongoose= require ('mongoose');

const app =express();

const users= require('./routes/users');

//port number
const port = 3000;

// cors middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// index route
app.get('/', (req, res)=> {
res.send('invalid endpoint');
});

//start server
app.listen(port, () => {
  console.log('server started on port '+port);
});
