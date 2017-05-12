var bodyParser = require('body-parser');
var cors = require('cors');

const middleware = [cors(), bodyParser.json()];

export default middleware;