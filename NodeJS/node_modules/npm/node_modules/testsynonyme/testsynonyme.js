function testsynonyme(nomchercher,callback1){


	fs = require('fs');var path1 = require('path');request = require('request');

	var pathname = path1.resolve('%CD%','./plugins/mémoiredemathilde/cyranomemoire/'+nomchercher+'.json' ).replace('\\%CD%', '');//console.log(pathname)
	var path = path1.resolve('%CD%','./plugins/mémoiredemathilde/cyranomemoire/' ).replace('\\%CD%', '');//console.log(path)

	var file=fs.readdirSync(path)





		  var longueurdir=file.length

	
	for(var i=0;i<longueurdir;i++){//console.log("i"+i)
		var nom=nomchercher+'.json';
		//console.log(nom +"              "+file[i])
	
			if (nom==file[i]){
					var files=fs.readFileSync(path+'/'+file[i],'utf8').toString()
					var objet = JSON.parse(files);jsonStr = JSON.stringify(objet)
					var longueur = objet.cyrano.length;//console.log(nom + ' : '+objet.cyrano)
 //console.log(objet.cyrano)
					var i=longueurdir-1
					callback1 (objet.cyrano)
					console.log("fini pour les synonymes")
					//return
					//callback({'tts' : ""})
					return false;
			}//fin if


			//else if ( i==longueurdir-1||i==longueurdir){Internet(nomchercher)}
	}//fin for



for(var j=0;j<longueurdir;j++){//console.log(j,'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',longueurdir)
			var files=fs.readFileSync(path+'/'+file[j],'utf8').toString();//console.log(j,"rrr",files,"eeeee",file[j],'88888888',path+'/'+file[j])
			var objet = JSON.parse(files);jsonStr = JSON.stringify(objet);//console.log(objet,'fff',jsonStr)
			var longueur = objet.cyrano.length;//console.log(longueur,'reeeeeee')
//console.log(objet.cyrano,"rrrrrrrtestsynonimes",nomchercher,'rrrrrrrrr')
			if(longueur>1){	
				if(objet.cyrano.search(nomchercher)>-1){
					objet.cyrano.push(nomchercher)
					callback1(objet.cyrano)
					var j= longueurdir-1
					return false
				}
			}	
}




callback1 ('je ne connais pas')
}

module.exports = testsynonyme


