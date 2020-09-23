exports.init = function(){

setTimeout(function(){ 
try{
var fs = require('fs');
var SCENARIOtext='on dira à '
var request = require('request') ; var cheerio = require('cheerio');
var path = require('path');
//var colour = require(path.resolve('%CD%', './plugins/modules/colour').replace('\\%CD%', ''))
var moment=require('moment');moment.locale('fr');

 var jour = path.resolve('%CD%', './plugins/courtoisie/'+moment().format("dddd")+'.json').replace('\\%CD%', '');//lis le nom des plugins
    var contents = JSON.parse(fs.readFileSync(jour,'utf8'))//.toString() ;
   
//speak journalier
for( var i=0 ; i< contents.length; i++){

       var timenow=moment().valueOf() ;// console.log("now  "+timenow)

       var timefutur=moment(contents[i],"HHmm").valueOf() ;// console.log("futur"+timefutur)

       var difference=timefutur-timenow ; //console.log("dif"+difference)
   
       var contentsspeak=contents[i+1]

       var time=contents[i]
   
            function timer(contentsspeak,difference,time){ 
              
              setTimeout(function(){
if(contentsspeak.search('Mathilde')<0){
                //var nomduplugin="courtoisie"//ou autre nom....
                var valeurduspeak=contentsspeak//phrase à dire
                //SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
                console.log(contentsspeak); 
  ///////////ScribeSpeak = SARAH.ScribeSpeak;            ScribeSpeak(valeurduspeak)
  JarvisIASpeech(valeurduspeak)
}
else{
console.log("ssssssssssssssss")
var request = require('request');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

request({ uri : 'https://127.0.0.1:4300/sarah?reco='+contentsspeak }, function (err, response, body){console.log('err=rr'+err+response)})
}
              }, difference);
            } 
      if(difference>0){console.log('on dira à : '+time+" : "+contentsspeak);SCENARIOtext=SCENARIOtext+" : "+time+" : "+contentsspeak; timer(contentsspeak,difference)}
    
    //}//fin if
i=i+1
}//fin for

//speak month
var month=moment().format('MMMM');//console.log(month)
var nbday=moment().format("DD");//console.log(nbday)

var cheminfichiermonth = path.resolve('%CD%', './plugins/courtoisie/'+month+'.json').replace('\\%CD%', '');//lis le nom des plugins
var fichiermonth = JSON.parse(fs.readFileSync(cheminfichiermonth,'utf8'))//.toString() ;
//console.log(fichiermonth)

var contentsspeak=""
for( var j=0 ; j< fichiermonth.length; j++){

       var timenow=moment().valueOf() ;// console.log("now  "+timenow)

       var timefutur=moment(fichiermonth[j+1],"HHmm").valueOf() ;// console.log("futur"+timefutur)

       var difference=timefutur-timenow ;// console.log("dif"+difference)
 
       var contentsspeak=fichiermonth[j+2]

       var time=fichiermonth[j+1]
       var contentsspeak=fichiermonth[j+2];//console.log("+++++++++++++"+contentsspeak)
 
            function timer2(contentsspeak,difference,time){ 
              
              setTimeout(function(){
if(contentsspeak.search('Mathilde')<0){
                //var nomduplugin="courtoisie"//ou autre nom....
                var valeurduspeak=contentsspeak//phrase à dire
                //SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
                console.log(contentsspeak); 
  /////////ScribeSpeak = SARAH.ScribeSpeak;            ScribeSpeak(valeurduspeak)
  JarvisIASpeech(valeurduspeak)
}
else{
console.log("ssssssssssssssss")
var request = require('request');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

request({ uri : 'https://127.0.0.1:4300/sarah?reco='+contentsspeak }, function (err, response, body){console.log('err=rr'+err+response)})
}

              //  var nomduplugin="courtoisie"//ou autre nom....
                //var valeurduspeak=contentsspeak//phrase à dire
               // SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
               // ScribeSpeak = SARAH.ScribeSpeak; 
                //ScribeSpeak(contentsspeak)
                //console.log(contentsspeak); 
              
              }, difference);

            }
    
      if((difference>0)&&(nbday==fichiermonth[j])){console.log('on dira à dans la journée : '+time+" : "+contentsspeak);SCENARIOtext=SCENARIOtext+" : "+time+" : "+contentsspeak; timer2(contentsspeak,difference)}
    
    //}//fin if

j=j+2

}//fin for
JarvisIAScenario(SCENARIOtext)

//////////SCRIBE.SCENARIO(SCENARIOtext)

setInterval(function(){ 
JarvisIAScenario(SCENARIOtext)
/////////SCRIBE.SCENARIO(SCENARIOtext)
//console.log(SCENARIOtext+"mmmmmmmmmmmmmmmmmm")
; }, 1000*60*60);

}catch(err){console.log(err)}
}, 10000);
}