exports.action = function(data){



var reg="/"+data.phraseecriture+"(.+)/i" ; var rgxp = eval(reg) ; var temp = JarvisIA.reco.match(rgxp) ; console.log(temp)
var phrase=temp[1].trim()

var exec = require('child_process').exec


			console.log(phrase+"!!!!!!!!!!!!!")
					
	
					//var nircmd = path.resolve('%CD%', './plugins/ecriture/nircmd/nircmd.exe').replace('\\%CD%', '');
					JarvisIASpeech("j'écris dans la case");
					exec(JarvisIANircmd+ ' clipboard set "'+phrase+'"',function(){
						exec(JarvisIANircmd + ' sendmouse left click',function(){ 
							exec(JarvisIANircmd+' sendkey ctrl down',function(){
								exec(JarvisIANircmd+' sendkey v press',function(){
									exec(JarvisIANircmd+' sendkey ctrl up',function(){})
									})
								})
							})
					})
					
					return false
		
}