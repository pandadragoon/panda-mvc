var express = require('express');

const setupApp = ()=> {
  var app = express();
  app.use(express.static('public'));
  return app;
}

export default setupApp;

