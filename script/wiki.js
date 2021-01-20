exports.init = function () {
try{
	var cheerio = require('cheerio')
	var requestjarviswsrnodejs = require('request');path = require('path');var data={};
	console.log('') ; console.log('passage par wikiiiii stopppppppppp')

var temp=JarvisIA.reco
var reg=["de ","qui est","recherche","  "]
for(var a=0;a<reg.length;a++){
temp=temp.replace(reg[a],"")
}
temp=temp.replace("œ","oe")
temp=temp.trim()
var url2="https://www.google.fr/search?q="+temp
console.log(url2)

requestjarviswsrnodejs({'uri':url2, 'headers':{'Accept-Charset': 'windows-1252'},'encoding':'binary' }, function (error, response, html) {
$ = cheerio.load(html);

var rechercheencart0=$('div.kCrYT:nth-child(4)').text()
console.log('');console.log("en 0  : "+rechercheencart0)

var rechercheencart1=$('div.kCrYT:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').text()
console.log('');console.log("en 1  : "+rechercheencart1)

var rechercheencart2=$('#main > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').text()
console.log("en 2 :"+rechercheencart2)
		
			var rechercheencart3=$('#main > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').text()
			console.log('');console.log("en 3 : "+rechercheencart3) 
		
			    var rechercheencart4=$('#main > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').text()
				console.log('');console.log("en 4 : "+rechercheencart4)
 var rechercheencart5=$('html body div#main div div.ZINbbc.xpd.O9g5cc.uUPGi div.kCrYT div div.BNeawe.s3v9rd.AP7Wnd div div.BNeawe.s3v9rd.AP7Wnd').eq(0).text()
				console.log('');console.log("en 5 : "+rechercheencart5)
				
if(rechercheencart3.length>0){JarvisIASpeech(rechercheencart3);return}
if(rechercheencart5.length>0){JarvisIASpeech(rechercheencart5);return}
JarvisIASpeech("désolé je n'ai rien trouvé")
		//	}//fin else
		//}//fin esle

})//fin requestjarviswsrnodejs

	return

}catch(err){console.log(err);return}
}
