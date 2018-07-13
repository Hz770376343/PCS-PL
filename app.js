const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const https = require('http');
const graphql = require('./server/graphql');
require('dotenv').config();
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
  let header = req.header('Origin');
  res.header("Access-Control-Allow-Origin", header);
  res.header('Vary', 'Origin');

// Access-Control-Max-Age
  res.header("Access-Control-Max-Age", "3600");

  // Access-Control-Allow-Credentials
  res.header("Access-Control-Allow-Credentials", "true");

  // Access-Control-Allow-Methods
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");

  // Access-Control-Allow-Headers
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, " + "X-CSRF-TOKEN");

  next();
});

// Send all other requests to the Angular app
app.use(express.static('dist', { maxAge: 1000*60*60 }));
app.get('*', (req, res, next) => {
  if (req.url.startsWith('/graphql') || req.url.startsWith('/graphiql')) {
    next();
  } else {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  }
});
// endregion
graphql.q(app);
//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = https.createServer(app);

server.listen(port, '0.0.0.0', null, () => console.log(`Running on 0.0.0.0:${port}`));

graphql.s(server);

module.exports = app;
