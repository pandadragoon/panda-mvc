require('babel-register')({
  presets: ['es2015']
});

require('dotenv').config();

var registers = require('./register').default;
var config = require('./config/config').default;
var app = require('./server');
var routes = require('./routes').default;
var middlewares = require('./middleware/index.js').default;

app.init(routes, middlewares);

registers.forEach((register)=> {
  app.inject(register.name, register.dependency);
});

app.listen(()=> {
  console.log('Serving on port ' + config.PORT)
});