let express = require("express");
let app = express();
let router = require('./js/router');
let bodyParser = require('body-parser');
let http = require('http').Server(app);
let lgr = require('./ts/logger');
let con = require('./ts/Configurations');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/modules" , express.static(__dirname + '/node_modules'));

app.use('/heroes',router);

let conf = new con.Configuration(console = true,file = true, colors = true,logLevel = con.Level.debug);
let logger = new lgr.Logger('chiki briki',conf);


console.log("----------");
logger.debug("This is:", "Debug");
console.log("----------");
logger.info("This is:","Info");
console.log("----------");
logger.warning("This is:","Warning");
console.log("----------");
logger.error("this is:","Error");
console.log("----------");
logger.log("error", "this","is","sparta!");

conf = new con.Configuration(console = true, file = false, colors = false, logLevel = con.Level.error);
logger.setConfiguration(conf);


logger.info("This is a meesage to the console only", "without color");

http.listen(3000, function(){
	console.log('listening on port:3000');
});