exports.action = function(data){

var path = require('path') ; var phraseanimaux=JarvisIA.reco
console.log("on a entendu ceci : "+phraseanimaux)

console.log(data.phrasebruitage+" ceci recus de xml")

var reg="/"+data.phrasebruitage+"(.+)/i" ; var rgxp = eval(reg) ; var temp = phraseanimaux.match(rgxp) ; console.log(temp)
var phraseanimaux = temp[1].trim() ; console.log("on cherche : ",phraseanimaux)

//on détermine le chemin du dossier
var patheanimaux=path.resolve('%CD%','./plugins/bruitages/animaux').replace('\\%CD%', '')

//on appel la librairie qui va faire le travail
var recursiveReadSync= require('recursive') , files

try {

//lecture dossier
var  filesanimaux = recursiveReadSync(patheanimaux)
//console.log(filesanimaux+" il y a  : "+filesanimaux.length)

var tempoanimaux=[]

for (var a=0;a<filesanimaux.length;a++){

	if(filesanimaux[a].search(new RegExp(phraseanimaux,"gi"))>-1){
		tempoanimaux.push(filesanimaux[a])
			
			JarvisIASound(tempoanimaux,JarvisIA.ipappel)
			console.log("trouvé ceci : "+tempoanimaux)
		return false
	}

}

JarvisIASpeech("pas d'immitation")
console.log("pas d'immitation")
} catch(err){console.log(err)}
}