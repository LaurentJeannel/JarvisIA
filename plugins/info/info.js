exports.action = function(data){
try{

var moment=require('moment');moment.locale('fr')
var informationtexte=[]
var fs = require('fs') ; var request = require('request') ; var cheerio = require('cheerio')

//lecture du news google
 request({ 'uri' : 'https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZxYUdjU0FtWnlHZ0pHVWlnQVAB?hl=fr&gl=FR&ceid=FR%3Afr'}, function(error, response, html){

       var $ = cheerio.load(html);
  
             for(var xx=2;xx<11;xx++){
             var a=" "+$('div.NiLAwe:nth-child('+xx+') > div:nth-child(2) > article:nth-child(1) > h3:nth-child(2) > a:nth-child(1)').text()
             console.log(a)
                          informationtexte.push(a)         
      }

JarvisIAInfo(moment().calendar()+" "+informationtexte)
var informationtextejson= JSON.stringify(informationtexte)
if(data.infomiroir=="0"){ 
JarvisIASpeech(informationtextejson+"|le monde est fou|j'espère que tout vas s'arranger|demain est en autre jour|cela ira mieux")
}

})//fin request

//return false
}catch(err){console.log(err)//;return false
}
}

 
