exports.init = function (data) {
var filestxtNoRules=""
//JarvisIA={};
JarvisIAPlugins={};JarvisIAItem="";JarvisIANomPlugins=[];JarvisIAItemtab=[]

VarLazy="0"

JarvisIAItemNoRules="";JarvisIAPluginsNoRules={};JarvisIANomPluginsNoRules=[];JarvisIAItemtabNoRules=[]

var fs = require('fs');var pathPlug=('./plugins')
    
var files = fs.readdirSync(pathPlug)

for(var a=0;a<files.length;a++){

		if(fs.statSync(pathPlug+'/'+files[a]).isDirectory()===true){
			JarvisIAPlugins[files[a].toLowerCase()]=[]
	JarvisIANomPlugins.push(files[a].toLowerCase())
								try{var filestxt=fs.readFileSync('./plugins/'+files[a]+'/'+files[a]+".xml",'utf8').toString().trim()}//fichier
									catch(err){
                                        console.log(err);
                                      var filestxt='<item>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<tag>data.xxxxxxxxxxxxxxxxxxxxxxxxxx="xxxxxxxxxxxxxxxxxxxxxxxx"</tag></item>'
                                        //return
                                    } //if(phrasedomo.search(new RegExp(temp[b],"gi"))>-1)
                                      if(filestxt.search(new RegExp("<NoRules>","gi"))>-1){
                                   // if(filestxt.search("<NoRules>")>-1){
                                        var filestxtNoRules=filestxt
                                        var filestxt='<item>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<tag>data.xxxxxxxxxxxxxxxxxxxxxxxxxx="xxxxxxxxxxxxxxxxxxxxxxxx"</tag></item>'                                       
                                    }
                                    if(filestxt==""){var filestxt='<item>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<tag>data.xxxxxxxxxxxxxxxxxxxxxxxxxx="xxxxxxxxxxxxxxxxxxxxxxxx"</tag></item>'}
                                    	var filestxt=filestxt.replace(new RegExp("</tag>","gi"),"")
										var filestxt=filestxt.replace(new RegExp("<item>","gi"),"")
								
										filestxt=filestxt.split('</item>')

    
					for(var b=0;b<filestxt.length-1;b++){//phrases 1 à 1
    				var phraseslongues=filestxt[b].trim()

    						var phrasescourtes=phraseslongues.split('<tag>')
    						
    				try{var phrasesfinal=phrasescourtes[0].toLowerCase().split(';')} 
    				 catch(err){var phrasesfinal="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
    				
    				
                    try{var datafile=phrasescourtes[1].split(';')} 
    				 catch(err){var datafile=["data.xxxxxxxxxxxxxxxxxxxxxxxxxx='xxxxxxxxxxxxxxxxxxxxxxxxxx'"]}
           
                for(var x=0;x<phrasesfinal.length;x++){
                if(phrasesfinal[x]!==""){JarvisIAItemtab.push(phrasesfinal[x])}
                else{JarvisIAItemtab.push("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}
    					}
              if(JarvisIAItem!==""){JarvisIAItem=JarvisIAItem+","+phrasesfinal} 
    					 else{JarvisIAItem=phrasesfinal}

    						for(w=0;w<phrasesfinal.length;w++){
    							phrasesfinal[w]=phrasesfinal[w].trim()
    						}
    						for(w=0;w<datafile.length;w++){
    							datafile[w]=datafile[w].trim()
    						if(datafile[w]==""){datafile[w]="data.xxxxxxxxxxxxxxxxxxxxxxxxxx='xxxxxxxxxxxxxxxxxxxxxxxxxx'"}
                }
					JarvisIAPlugins[files[a].toLowerCase()].push(phrasesfinal) ; JarvisIAPlugins[files[a].toLowerCase()].push(datafile)
    			}
/////////////////
////////////////no rules

if(filestxtNoRules!==""){//console.log("lazy !!")
    filestxtNoRules=filestxtNoRules.replace('<NoRules>','')
        JarvisIAPluginsNoRules[files[a].toLowerCase()]=[]
    JarvisIANomPluginsNoRules.push(files[a].toLowerCase())
    //console.log(filestxtNoRules)
  
    var filestxtNoRules=filestxtNoRules.replace(new RegExp("</tag>","gi"),"")
                                        var filestxtNoRules=filestxtNoRules.replace(new RegExp("<item>","gi"),"")
                                   
                                         filestxtNoRules=filestxtNoRules.split('</item>')
for(var b=0;b<filestxtNoRules.length-1;b++){//phrases 1 à 1
                    var phraseslongues=filestxtNoRules[b].trim()

                            var phrasescourtes=phraseslongues.split('<tag>')
                        
                    try{var phrasesfinal=phrasescourtes[0].toLowerCase().split(';')} 
                     catch(err){var phrasesfinal="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
                    
                    
                    try{var datafile=phrasescourtes[1].split(';')} 
                     catch(err){var datafile=["data.xxxxxxxxxxxxxxxxxxxxxxxxxx='xxxxxxxxxxxxxxxxxxxxxxxxxx'"]}
                     
        
                for(var x=0;x<phrasesfinal.length;x++){
                if(phrasesfinal[x]!==""){JarvisIAItemtabNoRules.push(phrasesfinal[x])}
else{JarvisIAItemtabNoRules.push("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}
}
                
                        if(JarvisIAItemNoRules!==""){JarvisIAItemNoRules=JarvisIAItemNoRules+","+phrasesfinal} 
                         else{JarvisIAItemNoRules=phrasesfinal}

                            for(w=0;w<phrasesfinal.length;w++){
                                phrasesfinal[w]=phrasesfinal[w].trim()
                            }
                            for(w=0;w<datafile.length;w++){
                                datafile[w]=datafile[w].trim()
                                if(datafile[w]==""){datafile[w]="data.xxxxxxxxxxxxxxxxxxxxxxxxxx='xxxxxxxxxxxxxxxxxxxxxxxxxx'"}
                            }
                    JarvisIAPluginsNoRules[files[a].toLowerCase()].push(phrasesfinal) ; JarvisIAPluginsNoRules[files[a].toLowerCase()].push(datafile)
                }
               var filestxtNoRules=""
}

		}//fin if fs.statSync(pathPlug+'/'+files[a]).isDirectory()===true){
		






}//fin for a
var triFn = function(a, b){
  if (a.length > b.length) return -1;
  if (a.length  < b.length) return 1;
  if (a.length == b.length) return 0;
}
JarvisIAItemtab.sort(triFn); // tri le tableau qui deviendra 
JarvisIAItemtabNoRules.sort(triFn)

//console.log(JarvisIAPlugins)

//console.log(JarvisIANomPlugins)

//console.log(JarvisIAPluginsNoRules)

//console.log(JarvisIANomPluginsNoRules)

}

//////////////////////////////////
//////////////////////////////////


exports.initlazy = function (data,nomplug) {
VarLazy="1"
//JarvisIA={};
JarvisIAPlugins={};
JarvisIAItem="";
JarvisIANomPlugins=[]
var fs = require('fs');
       var pathPlug=('./plugins')
       JarvisIAItemtab=[]

   //console.log(data.lazy,"44444")
   //return
var fs = require('fs');
       var pathPlug=('./plugins')
       
       //console.log(pathPlug)
var files = data.lazy
//console.log(files,"66666")




            JarvisIAPlugins[nomplug]=[]
    JarvisIANomPlugins.push(nomplug)
                                try{var filestxt=fs.readFileSync(files,'utf8').toString().trim()}//fichier
                                    catch(err){
                                        console.log(err+"                     error plugin js");
                                      var filestxt='<item>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<tag>data.xxxxxxxxxxxxxxxxxxxxxxxxxx="xxxxxxxxxxxxxxxxxxxxxxxx"</tag></item>'
                                        //return
                                    }
                                    console.log(filestxt,"            filestxt")
                                    if(filestxt==""){var filestxt='<item>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<tag>data.xxxxxxxxxxxxxxxxxxxxxxxxxx="xxxxxxxxxxxxxxxxxxxxxxxx"</tag></item>'}
                                        var filestxt=filestxt.replace(new RegExp("</tag>","gi"),"")
                                        var filestxt=filestxt.replace(new RegExp("<item>","gi"),"")
                                       
                                        filestxt=filestxt.split('</item>')

  
                    for(var b=0;b<filestxt.length-1;b++){//phrases 1 à 1
                    var phraseslongues=filestxt[b].trim()

                            var phrasescourtes=phraseslongues.split('<tag>')
                           
                    try{var phrasesfinal=phrasescourtes[0].toLowerCase().split(';')} 
                     catch(err){var phrasesfinal="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
                    
                    
                    try{var datafile=phrasescourtes[1].split(';')} 
                     catch(err){var datafile=["data.xxxxxxxxxxxxxxxxxxxxxxxxxx='xxxxxxxxxxxxxxxxxxxxxxxxxx'"]}
                     
                   
                for(var x=0;x<phrasesfinal.length;x++){
                if(phrasesfinal[x]!==""){JarvisIAItemtab.push(phrasesfinal[x])}
                else{JarvisIAItemtab.push("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}
                }
               
                        if(JarvisIAItem!==""){JarvisIAItem=JarvisIAItem+","+phrasesfinal} 
                         else{JarvisIAItem=phrasesfinal}

                            for(w=0;w<phrasesfinal.length;w++){
                                phrasesfinal[w]=phrasesfinal[w].trim()
                            }
                            for(w=0;w<datafile.length;w++){
                                datafile[w]=datafile[w].trim()
                                if(datafile[w]==""){datafile[w]="data.xxxxxxxxxxxxxxxxxxxxxxxxxx='xxxxxxxxxxxxxxxxxxxxxxxxxx'"}
                            }
                    JarvisIAPlugins[nomplug].push(phrasesfinal) ; JarvisIAPlugins[nomplug].push(datafile)
                }//for b


var triFn = function(a, b){
  if (a.length > b.length) return -1;
  if (a.length  < b.length) return 1;
  if (a.length == b.length) return 0;
}
JarvisIAItemtab.sort(triFn); // tri le tableau qui deviendra 
console.log(JarvisIAItem,"            pour info plug js")

console.log(JarvisIAItemtab,"               pour info plug")
console.log(JarvisIAPlugins,"               pour info plug")
console.log('var lazy        ',VarLazy)
}

exports.initialisation = function () {
  var path = require('path');
console.log('init Module nb '+JarvisIANomPlugins.length)
for(var a=0;a<JarvisIANomPlugins.length;a++){

var tempo1=path.resolve('%CD%',"./plugins/"+JarvisIANomPlugins[a]+"/"+JarvisIANomPlugins[a]+".js").replace('\\%CD%', '')
console.log(" Init Module ...... "+tempo1)
            var temp = require(tempo1);

console.log(temp.hasOwnProperty('init'));
if(temp.hasOwnProperty('init')){
  try {temp.init()}
  catch(err){}
}
          //delete require.cache[require.resolve(tempo1)]

//var filestxt=fs.readFileSync('./plugins/'+files[a]+'/'+files[a]+".xml",'utf8').toString().trim()
}//fichier

//JarvisIANomPlugins
}