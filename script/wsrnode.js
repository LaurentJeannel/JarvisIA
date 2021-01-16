try{
console.log("node js version    "+    process.version);
//sudo npm cache clean -f
//sudo npm install -g n
//sudo npm stable
//npm update
//npm outdated
//npm install serialport --build-from-source
//npm install npm -g
//node -v
//npm -v
//nvm install stable
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
//https://drive.google.com/drive/u/0/folders/1wlS25fvVdtspTrcLyt4B2IaPQrKXwtXo
var requesta = require('request');
var fs = require('fs');
var https = require('https');var http = require('http');
var express = require('express');
var util = require('util');
var cheerio = require('cheerio')
var txt;
//var ip;
var data={};
 sse="";
var path = require('path');
var pathPlug=('./plugins')
var files = fs.readdirSync(pathPlug)

var os = require( 'os' );
try{
var interfaces = os.networkInterfaces();
 var addresses = [];

 Object.keys(interfaces).forEach((netInterface) => {
  interfaces[netInterface].forEach((interfaceObject) => {
   if (interfaceObject.family === 'IPv4' && !interfaceObject.internal) {
    addresses.push(interfaceObject.address);
   }
  });
 });
 console.log( addresses[0]," addresse")

JarvisIAIpMaster = addresses[0];
}
catch(err){console.log('error ip detection, please contact creator whith error #001');setTimeout(function(){  }, 10000);}
levenshtein=require('levenshtein')

Askme=0
JarvisIAResponse=''
JarvisIANom="Mathilde"
JarvisIANircmd = __dirname + '/bin/nircmd.exe ';// 16 ou 32 ?
JarvisIA={};
JarvisIASpeech="";
JarvisIASound="";
JarvisIAPlugins={};
JarvisIAItem="";
JarvisIANomPlugins=[]

 

var tempo1=path.resolve('%CD%',"./script/plugin.js").replace('\\%CD%', '')
		     		var temp = require(tempo1);
					temp.init()

					delete require.cache[require.resolve(tempo1)]

var tempo3=path.resolve('%CD%',"./script/function.js").replace('\\%CD%', '')
		     		var temp = require(tempo3);
					temp.init()

					delete require.cache[require.resolve(tempo3)]

var tempo=path.resolve('%CD%',"./script/start.js").replace('\\%CD%', '')
		     		var temp = require(tempo);
					temp.init()

					delete require.cache[require.resolve(tempo)]	

var tempo=path.resolve('%CD%',"./script/plugin.js").replace('\\%CD%', '')
		     		var temp = require(tempo);
					temp.initialisation()

					delete require.cache[require.resolve(tempo)]
//initialisation

console.log('')

// port HTTPS -- à changer selon les ports disponibles
var port_https = '4300'; console.log("Préparation du Serveur HTTP sur le port " + port_https);
var app = express() ; app.use(express.static(__dirname  + '/static'));

//app musique
appmusique = express();
appmusique.use(express.static('C:\\'));
SSEMUSIQUE = require('sse-emitter');

ssemusique = new SSEMUSIQUE({
  keepAlive: 10000, // in ms, defaults to 10000
});

appmusique.get('/scri', ssemusique.bind());

http.createServer({
	
	}, appmusique).listen(8091);

//appmusique.listen(8091);

// on utilise Server-Sent Emitters pour dialoguer avec Chrome et la page d'acquisition audio
var SSE = require('sse-emitter');
sse = new SSE({  keepAlive: 30000,//dddd
 });

app.get('/jarvispage', sse.bind());
app.get('/jarvis', function(req, res){
res.write('ok');res.end();


var tempo2=path.resolve('%CD%',"./script/traitement.js").replace('\\%CD%', '')
		     		var temp = require(tempo2);
					try{temp.init(req)}
					catch(err){console.log(err);setTimeout(function(){ }, 10000)}

					delete require.cache[require.resolve(tempo2)]
});//fin app get !!!!!!!







https.createServer({
	key: fs.readFileSync(__dirname + '/key.pem'),
	cert: fs.readFileSync(__dirname + '/cert.pem')
	}, app).listen(port_https);

autorun_browser(false);

//setTimeout(function(){ 
//	console.log("")
//JarvisIASpeech("système activé et opérationnel, en attente d'instruction")
 //}, 10000);
function autorun_browser(kill) {
	var exec = require('child_process').exec;
	if (kill==true) { var proc = JarvisIANircmd + 'closeprocess chrome.exe'}
	else {	
var proc = 'start chrome.exe --app=https://127.0.0.1:4300 '
//var proc = 'start chrome.exe --window-size=800,600 --app=https://127.0.0.1:4300 --new-window'
//var proc = 'C:\\JarvisIA\\chrome-win\\chrome "https://127.0.0.1:4300 " '
//--kiosk http://example.com/
	}
//chrome.exe --app=https://duckduckgo.com --new-window
	var child = exec(proc, function (error, stdout, stderr) {	
		if (error !== null) console.log('exec error: ' + error);
		if (kill==true) setTimeout(function() {autorun_browser(false);},2000);
	});		

}//fin autorun

}catch(err){setTimeout(function(){}, 100000);
	console.log('');console.log(err)

}