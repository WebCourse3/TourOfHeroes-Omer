
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
logger.error("Saar","Ziv");
logger.log(con.Level.error,"this","is","sparta!");


http.listen(3000, function(){
	console.log('listening on port:3000');
});