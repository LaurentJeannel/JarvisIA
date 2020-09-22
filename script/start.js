exports.init = function (data) {

//alerte météo
setTimeout(function(){
try{
  var fsa = require('fs');
  var requeststart = require('request');
var path = require('path');
var exec = require('child_process').exec;
    var download = function(uri, filename, callback){
                requeststart.head(uri, function(err, res, body){    
                    requeststart(uri).pipe(fsa.createWriteStream(filename)).on('close', callback);
                });
    };

  var sauvfilePath = path.resolve('%CD%', './script/static/icones/alertemeteo').replace('\\%CD%', '');
  var deatefinal = new Date().getTime()

      download('http://alerte.vigilance-meteo.fr/images/map/france_index.png', sauvfilePath+'/google'+deatefinal +".png", function(){
          console.log('done lecture image alerte météo ');
          JarvisIAIcones('Imgalerte','icones/alertemeteo/google'+deatefinal +".png")
      });
      var path = require('path');
    var nircmd =JarvisIANircmd
  var dir = path.resolve('%CD%', './script/').replace('\\%CD%', '');
  var processa=nircmd + ' filldelete "' + dir + '\\static\\icones\\alertemeteo\\*.*"'﻿                    
  exec(processa)
console.log('delete static\\icones\\alertemeteo\\*.*',processa)
    }
    catch(err){console.log(err,"    error")}
;} ,1000*10)

//lecture alerte meteo set interval
setInterval(function(){ 
  try{
    var exec = require('child_process').exec;
    var path = require('path');
    var nircmd =JarvisIANircmd
  var dir = path.resolve('%CD%', './script/').replace('\\%CD%', '');
  var processb=nircmd + ' filldelete "' + dir + '\\static\\icones\\alertemeteo\\*.*"'﻿                    
  exec(processb)
console.log('delete static\\icones\\alertemeteo\\*.*',processb)

setTimeout(function(){

var fsa = require('fs');
var requeststart2 = require('request');
var path = require('path');
var download = function(uri, filename, callback){
  requeststart2.head(uri, function(err, res, body){    
    requeststart2(uri).pipe(fsa.createWriteStream(filename)).on('close', callback);
  });
};
var sauvfilePath = path.resolve('%CD%', './script/static/icones/alertemeteo').replace('\\%CD%', '');
var deatefinal = new Date().getTime()
download('http://alerte.vigilance-meteo.fr/images/map/france_index.png', sauvfilePath+'/google'+deatefinal +".png", function(){
  console.log('done alerte météo interval ');
 JarvisIAIcones('Imgalerte','icones/alertemeteo/google'+deatefinal +".png")

});
}, 1000*30);//fin timeout
 }
    catch(err){console.log(err,'       error')}
; }, 1000*3600);
//fin alerte météo

//plug courtoisie
setTimeout(function(){
var path = require('path');
var tempo=path.resolve('%CD%',"./plugins/courtoisie/courtoisie.js").replace('\\%CD%', '')
            var tempo1 = require(tempo);
          tempo1.init()
          delete require.cache[require.resolve(tempo)]
;} ,1000*5)
//fin plug courtoisie


/////////info
setTimeout(function(){
console.log('init info') 
JarvisIARun(['info','data.infomiroir="1"']) 
}, 1000*30);


setInterval(function(){ 

console.log('alerte info cron')
JarvisIARun(['info','data.infomiroir="1"'])
 }, 1000*1800);


}//fin alerte meteo