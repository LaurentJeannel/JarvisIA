exports.init = function (req) {
try{
	var cheerio = require('cheerio')
	var requestjarviswsrnodejs = require('request');path = require('path');var data={};
	console.log('')
	console.log(req.query.reco+' query');console.log(Askme+'   Askme')


		if(Askme==1){ 
			console.log('');
			console.log("Askme........wsrnodejs   "+req.query.reco,"  Askme OFF")
			Askme=0	
			JarvisIAResponse=req.query.reco
			setTimeout(function(){ JarvisIAResponse="";}, 1000)
			return	
		}	

var levi=function levi(){

	for(var i=0;i<JarvisIAItemtab.length;i++){
		var levitest=levenshtein(JarvisIAItemtab[i],txt)
		var concordancelevi=(levitest*100)/JarvisIAItemtab[i].length
		console.log(concordancelevi,JarvisIAItemtab[i])
			if(concordancelevi<21){
				console.log("trouvé en levenshtein 				",JarvisIAItemtab[i],concordancelevi);
				txt=JarvisIAItemtab[i]
				indextraitement();
				return
			}
	}
	if(VarLazy!=="1"){wiki()}
		else{console.log('rien donc stop car lazy'); return}
}
			
var indextraitement=function indextraitement(){txt=txt.trim()
console.log(txt+"recu en index")
//console.log(JarvisIANomPlugins.length,"sssss")
for(var i=0;i<JarvisIANomPlugins.length;i++){
					for (var j=0;j<JarvisIAPlugins[JarvisIANomPlugins[i]].length;j++){//   console.log(JarvisIAPlugins[JarvisIANomPlugins[i]][j]) 
				    	if(JarvisIAPlugins[JarvisIANomPlugins[i]][j].indexOf(txt)>-1){
			     			console.log('')
			     			console.log('FIND 1 : '+JarvisIANomPlugins[i])
				     	
			     			try{var temp=JarvisIAPlugins[JarvisIANomPlugins[i]][j+1]
								for (var k=0;k<temp.length;k++){console.log(temp[k],"		 les datas");eval(temp[k])}
			     			}//fin try
			     			catch(err){console.log(JarvisIAPlugins[JarvisIANomPlugins[i]][j+1]);eval(JarvisIAPlugins[JarvisIANomPlugins[i]][j+1])}
							if(data.lazy!==undefined){
								console.log("Lazy ==> 		",data);
								try{console.log(data.tts," 			valeur tts");if(data.tts!==undefined){JarvisIASpeech(data.tts);console.log('doneeeeeeee')}}catch(err){}
									if(data.lazy=="off"){try{console.log(data.tts,"			vameur tts")}catch(err){}
										var tempo1=path.resolve('%CD%',"./script/plugin.js").replace('\\%CD%', '')
				     					var smartlife1 = require(tempo1);
										smartlife1.init()
										return
							}
						var tempo1=path.resolve('%CD%',"./script/plugin.js").replace('\\%CD%', '')
		     			var smartlife1 = require(tempo1);
		     			try{console.log(data.tts,"			valeur tts");if(data.tts!==undefined){JarvisIASpeech(data.tts);console.log('doneeeeeeee')}}catch(err){}
						smartlife1.initlazy(data,JarvisIANomPlugins[i])

						delete require.cache[require.resolve(tempo1)]
						return
					}     	
			     			var tempo=path.resolve('%CD%',"./plugins/"+JarvisIANomPlugins[i]+"/"+JarvisIANomPlugins[i]+".js").replace('\\%CD%', '')
			     			var smartlife = require(tempo);
			     			try{console.log(data.tts,"				valeur tts");if(data.tts!==undefined){JarvisIASpeech(data.tts);console.log('doneeeeeeee')}}catch(err){}
							try{smartlife.action(data)}
							catch(err){setTimeout(function(){ }, 10000);
										console.log(err)
										delete require.cache[require.resolve(tempo)]
				 						data={}
				 						
				 						return
				 			}
							delete require.cache[require.resolve(tempo)]
				 			data={}
							return
					 			
					 	}//fin if index off	


					}//fin for j

			}//fin for i
return
}//fin var index

var searchtraitement=function searchtraitement(){
console.log("search : "+txt)
for(var a=0;a<JarvisIAItemtab.length;a++){
if(txt.search(JarvisIAItemtab[a])>-1){console.log('FIND 	 '+txt.search(JarvisIAItemtab[a])+" "+JarvisIAItemtab[a]);txt=JarvisIAItemtab[a]}
}

for(var i=0;i<JarvisIANomPlugins.length;i++){
					for (var j=0;j<JarvisIAPlugins[JarvisIANomPlugins[i]].length;j++){
							for(var k=0;k<JarvisIAPlugins[JarvisIANomPlugins[i]][j].length;k++){
						
								if(txt.search(JarvisIAPlugins[JarvisIANomPlugins[i]][j][k])>-1){
									console.log('');console.log("FIND 2 : ");console.log((JarvisIAPlugins[JarvisIANomPlugins[i]][j][k]))
									console.log('')
									try{
										var temp=JarvisIAPlugins[JarvisIANomPlugins[i]][j+1];console.log('');console.log(JarvisIAPlugins[JarvisIANomPlugins[i]],"*****"+temp)
										for (var k=0;k<temp.length;k++){console.log('');console.log(temp[k]," les datas");eval(temp[k])}
							     	}
					     			catch(err){console.log('first error');console.log('');console.log(JarvisIAPlugins[JarvisIANomPlugins[i]][j+1]);eval(JarvisIAPlugins[JarvisIANomPlugins[i]][j+1])}
					     			try{
							     		var tempo=path.resolve('%CD%',"./plugins/"+JarvisIANomPlugins[i]+"/"+JarvisIANomPlugins[i]+".js").replace('\\%CD%', '')
							     		var smartlife = require(tempo);
							     		try{console.log(data.tts," 			tts");if(data.tts!==undefined){JarvisIASpeech(data.tts);console.log('doneeeeeeee')}}catch(err){}
										try{smartlife.action(data)}
										catch(err){setTimeout(function(){ }, 10000)
											delete require.cache[require.resolve(tempo)]
							 			data={};return}
										delete require.cache[require.resolve(tempo)]
							 			data={}				 	
										return
									}//fin try
									catch(err){
										console.log('');console.log(err,"erreur in plug ........")
										var tempo=path.resolve('%CD%',"./plugins/"+JarvisIANomPlugins[i]+"/"+JarvisIANomPlugins[i]+".js").replace('\\%CD%', '')
							     		var smartlife = require(tempo);
							     		try{console.log(data.tts,"			tts");if(data.tts!==undefined){JarvisIASpeech(data.tts);console.log('doneeeeeeee')}}catch(err){}
										try{smartlife.action()}
										catch(err){delete require.cache[require.resolve(tempo)]
							 			setTimeout(function(){ }, 10000);
							 			data={}
							 			return}
										delete require.cache[require.resolve(tempo)]
							 			data={}
							 			return
									}//fin catch err

								}//fin if txt
						
							}//fin for k
						}//fin for j	
    			}//fin for i
    			console.log('rien en FIND 2 ==> levi')
    			levi()
    			return
    			//do to levins
}


var wiki=function wiki(){
	var tempo2=path.resolve('%CD%',"./script/wiki.js").replace('\\%CD%', '')
		     		var temp = require(tempo2);
					temp.init()

					delete require.cache[require.resolve(tempo2)]
return
}//fin wiki


if ( (req.query.reco.search(JarvisIANom)>-1)||(VarLazy=="1" ) ){console.log(JarvisIAItemtab,' passage lazy ',VarLazy,'VarLazy !!!!!!!!!!!')
			
			txt = req.query.reco ; txt=txt.replace(JarvisIANom,'') ; txt = txt.toLowerCase().trim();				
			JarvisIA.ipappel=req.query.confidence ; JarvisIA.reco=txt
				
				if(JarvisIAItemtab.indexOf(txt)>-1){// il est quelle heure
					console.log("indexOf >-1111111")
				indextraitement()
				return
				}//fin if index


				if((JarvisIAItemtab.indexOf(txt)<0)){//s'il te plait il est quelle heure
						
						console.log("indexOf <00000000000")
				searchtraitement()
				return				
				}
			


	
	JarvisIAResponse=""	
		data={}
return


}////fin first if !==undefined & mathilde





////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



if ((typeof req.query.reco !== 'undefined')&&(req.query.reco.search(JarvisIANom)<0)) {
	console.log('pas de nom de système')

			txt = req.query.reco;	
			txt=txt.replace(JarvisIANom,'')		
			msg = "Reco: " + txt + " (" + req.query.confidence +")" + (req.query.force=='true' ? ' - FORCE': '');
			txt = txt.toLowerCase().trim();
		 

		console.log(JarvisIANomPluginsNoRules,"       pour info          ",JarvisIANomPluginsNoRules.length)
		console.log(JarvisIAPluginsNoRules," 			pour info")
		 JarvisIA.ipappel=req.query.confidence
		 JarvisIA.reco=txt

for(var i=0;i<JarvisIANomPluginsNoRules.length;i++){
					for (var j=0;j<JarvisIAPluginsNoRules[JarvisIANomPluginsNoRules[i]].length;j++){//   console.log(JarvisIAPlugins[JarvisIANomPlugins[i]][j]) 
				    	if(JarvisIAPluginsNoRules[JarvisIANomPluginsNoRules[i]][j].indexOf(txt)>-1){
			     			console.log('')
			     			console.log('FIND 1 : '+JarvisIANomPluginsNoRules[i])

			     	
			     			try{var temp=JarvisIAPluginsNoRules[JarvisIANomPluginsNoRules[i]][j+1]
								for (var k=0;k<temp.length;k++){console.log(temp[k]," les datas");eval(temp[k])}
			     			}//fin try
			     			catch(err){console.log(JarvisIAPluginsNoRules[JarvisIANomPluginsNoRules[i]][j+1]);eval(JarvisIAPluginsNoRules[JarvisIANomPluginsNoRules[i]][j+1])}
					if(data.lazy!==undefined){
						console.log("Lazy ==> ",data);
						try{console.log(data.tts,"          tts");if(data.tts!==undefined){JarvisIASpeech(data.tts);console.log('doneeeeeeee')}}catch(err){}
							if(data.lazy=="off"){try{console.log(data.tts,"          tts")}catch(err){}
								var tempo1=path.resolve('%CD%',"./script/plugin.js").replace('\\%CD%', '')
		     					var smartlife1 = require(tempo1);
								smartlife1.init()
								return
							}
						var tempo1=path.resolve('%CD%',"./script/plugin.js").replace('\\%CD%', '')
		     			var smartlife1 = require(tempo1);
						smartlife1.initlazy(data)

						delete require.cache[require.resolve(tempo1)]
						return
					}     	
			     			var tempo=path.resolve('%CD%',"./plugins/"+JarvisIANomPluginsNoRules[i]+"/"+JarvisIANomPluginsNoRules[i]+".js").replace('\\%CD%', '')
			     			var smartlife = require(tempo);
			     			try{console.log(data.tts,"        tts");if(data.tts!==undefined){JarvisIASpeech(data.tts);console.log('doneeeeeeee')}}catch(err){}
							try{smartlife.action(data)}
							catch(err){delete require.cache[require.resolve(tempo)]

								setTimeout(function(){ }, 10000);
				 			data={}
							return}
							delete require.cache[require.resolve(tempo)]
				 			data={}
							return
					 			
					 	}//fin if index off	


					}//fin for j

			}//fin for i
			console.log('NO MATCH pas de nom de système')
return
}// fin if !==undefined





}catch(err){console.log(err," de traitement");setTimeout(function(){ }, 10000);return}
return
}
 