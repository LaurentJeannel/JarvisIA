exports.action = function(data) {

path = require('path')

switch(data.val) {


    case "1": 

          var Txt = new Array; 

            Txt[0] = "1.wav";

            Txt[1] = "oulala, tiens ton langage";



    break;

      

    case "2": 

          var Txt = new Array; 

            Txt[0] = "bien sûr je suis là";

            Txt[1] = "je suis toujours présente";
            Txt[2] = "où veux-tu que je sois";
    break;


    case "3": 

          var Txt = new Array; 

            Txt[0] = "un peu de silence ne ferait pas de mal";

            Txt[1] = "le volume sonore serait-il trop élevé";
    break;  


   

    case "4": 

          var Txt = new Array; 

            Txt[0] = "on se calme et on boit frais";

            Txt[1] = "rien ne sert de s'énerver";

            Txt[2] = "vivement qu'il parte à la fac";

    break; 


    case "5": 

          var Txt = new Array; 

            Txt[0] = "jusqu'à la prochaine fois";

            Txt[0] = "tu as le moral de dire ça";

    break;  


    case "6": 

          var Txt = new Array; 

            Txt[0] = "je fais ce que je peux";

            Txt[1] = "encore être de ma faute";

            Txt[2] = "débrouille-toi tout seul";

    break; 


       case "7": 

          var Txt = new Array; 

            Txt[0] = "tu veux peut-être que je range";

            Txt[1] = "on dirait ma chambre quand j'étais jeune";

            Txt[2] = "pas tant que ça je trouve";

    break;


 
  }    

  


  

 

Choix = Math.floor(Math.random() * Txt.length);

console.log(Txt[Choix])
 

if((Txt[Choix].search(".mp3")>-1)||(Txt[Choix].search(".wav")>-1)){

    var musiquelistejarvis=[]
    musiquelistejarvis.push(path.resolve('%CD%', './plugins/jarvis/'+Txt[Choix]).replace('\\%CD%', ''))
    console.log(musiquelistejarvis)
    //SCRIBE.musique(musiquelistejarvis,myIPretour)
}


else{JarvisIASpeech(Txt[Choix])}


return
 }
