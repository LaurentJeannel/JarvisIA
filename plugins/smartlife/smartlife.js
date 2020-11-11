exports.action = function(data){
try{
var actionsmartonoff=data.verifdomo
console.log(actionsmartonoff,' demandé')
var request = require('request');


var config={
  userName: "xxxxxxxxxxxxxx",//mail d'inscription à l'appi smart
  password: "xxxxxxxxxxxx",//code de connexion à l'api smart
  bizType: "smart_life",
  countryCode: "33",
  region: "eu"
}
//console.log(tableauvocale);
//callback();return false
//if (typeof tokensnovar === "undefined"){var continu=0}  
//else{console.log(tokensnovar," temps restant");var continu=1}
//callback();return false
var continu=0
try{

//var phrasedomo=JSON.stringify(SARAH.context.scribe.lastReco);var phrasedomo=JSON.parse(phrasedomo) ;
var phrasedomo=JarvisIA.reco


if(phrasedomo.search('couleur')>-1){console.log('couleur de la lampe demandée');

    config.command="colorSet" ; var hsv_color = {}

      if(phrasedomo.search('bleu')>-1){hsv_color["hue"] = 180}
      if(phrasedomo.search('rouge')>-1){hsv_color["hue"] = 0}
      if(phrasedomo.search('vert')>-1){hsv_color["hue"] = 120}
      if(phrasedomo.search('verre')>-1){hsv_color["hue"] = 120} 
      if(phrasedomo.search('bleu')>-1){hsv_color["hue"] = 180}
      if(phrasedomo.search('jaune')>-1){hsv_color["hue"] = 60} 

       hsv_color["saturation"] = 255
       hsv_color["brightness"] = 9541
     var payload={}
       payload.color= hsv_color
       config.command="colorSet"
}


if (phrasedomo.search('luminosité')>-1){console.log('luminosité détectée');
 config.command="brightnessSet";
var brightness=phrasedomo.replace(new RegExp('[^0-9]', 'ig'),"")
if(brightness<11){brightness=11}
}

if(phrasedomo.search('température')>-1){console.log('température de la lampe détectée');
 config.command="colorTemperatureSet";
var brightness=phrasedomo.replace(new RegExp('[^0-9]', 'ig'),"")*100;//console.log(brightness+"!!!!!!!!!!!!!!!!")
if(brightness<1000){brightness=1000}
if(brightness>10000){brightness=10000}
}

if(phrasedomo.search(new RegExp("prise","gi")>-1)){
  var iconedomo="prise"
}
if ( (phrasedomo.search(new RegExp("lampe","gi")>-1)) || (phrasedomo.search(new RegExp("ampoule","gi")>-1)) || (phrasedomo.search(new RegExp("plafonier","gi")>-1)) ){
  var iconedomo="lampe"
}
else{var iconedomo="vide"}


var options=config

function varructor(config) {
    
    this.devices = [];
   
      this.core = {
        userName: config.userName,
        password: config.password,
        countryCode: config.countryCode || '44',
        bizType: config.bizType || 'smart_life',
        from: 'tuya',
      };
   
    this.uri = 'https://px1.tuyaeu.com/homeassistant'.replace('eu', config.region);
    var options=config
    
if(continu==0){
    login(options)
  }
  else{
    var config = options || {};find(options,tok)
  }

  }

function login(options) {
    var config = options || {};
    var uri = this.uri+"/auth.do";
    var headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    // Set userName pass biz
    var data = config.core || this.core;
    data.from = 'tuya';
    var postConfig = {
      uri:uri,
      method: 'POST',
      headers:headers,
      form: data,
    };

    config.method = 'POST';
     
      request(postConfig, function(err, response, body) {
       tokens= body
 
    tokens = JSON.parse(tokens);
    this.tokens = tokens;
    tokensnovar=this.tokens.expires_in
    //console.log(tokensnovar+"!!!!!!!!!!!!!!!!!!!!")
    this.accessToken = tokens.access_token;
    tok=this.accessToken

    if(tokens && tokens.responseStatus && tokens.responseStatus === 'error'){
      console.error(tokens.errorMsg);
      return false;
    };find(options,tok)
    });
   
}


 function find(options,tok) {
    const config = (options) || {};
    const uri = this.uri+"/skill";
    const data = {
      header: {
        name: 'Discovery',
        namespace: 'discovery',
        payloadVersion: 1,
      },
      payload: {
        accessToken: tok,
      },
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const postConfig = {
      uri:uri,
      method: 'POST',
      headers:headers,
      json: data,
    };
   
  



















if( (typeof tableauip==='undefined') || (actionsmartonoff=="vérif") ){

 tableauip=[]
    tableauvocale=""
//console.log("posttttttttttttt22222222222")
  //  console.log(postConfig)



     request(postConfig, function(err, response, body) {
   
   tableau=""  
   //console.log(body.payload.devices) 
for(var a=0;a<body.payload.devices.length;a++){
      
      //console.log('nom : '+body.payload.devices[a].name)
      //console.log('id : '+body.payload.devices[a].id)
      //console.log('is online : '+body.payload.devices[a].data.online)
     // console.log('state : '+body.payload.devices[a].data.state)
      var online=body.payload.devices[a].data.online
try{
      if(JSON.stringify(online).search('false')>-1){
           body.payload.devices[a].data.state="hors ligne dernière valeur connu "+body.payload.devices[a].data.state+" ; "
      }
}
catch(err){body.payload.devices[a].data.state="nul"}
//console.log(body.payload.devices[a])
var tempor=body.payload.devices[a].name.replace(new RegExp('[^0-9A-Za-zéèàëçûô]', 'ig')," ")
console.log(tempor,' trouvé')
      tableauip.push(tempor)
      tableauip.push(body.payload.devices[a].id)

      tableau=" "+tableau+body.payload.devices[a].name+" "+body.payload.devices[a].data.state+" "
      tableauvocale=" "+tableauvocale+body.payload.devices[a].name+" "+body.payload.devices[a].data.state+" "
      tableauvocale=tableauvocale.replace(new RegExp("false","gi"),"éteinte")
      tableauvocale=tableauvocale.replace(new RegExp("true","gi"),"allumée")
//tableauvocale=tableauvocale.replace(new RegExp("0-9A-Za-z","gi")," ")
      tableau=tableau.replace(new RegExp("false","gi"),"éteinte")
      tableau=tableau.replace(new RegExp("true","gi"),"allumée")
      tableau=tableau.replace(new RegExp('_',"gi")," ")
      tableau=tableau.replace(new RegExp('-',"gi")," ")
tableau=tableau.replace(new RegExp('[^0-9A-Za-zéèàëçûô]', 'ig')," ")

      
}//fin for










//console.log(tableauvocale+"4444444444444")
//bri 1000    ;; colortemp 36294   ;;  colorset white
console.log(actionsmartonoff+" action demandée")
if(actionsmartonoff=="vérif"){
  console.log(body.payload.devices.length+"prises détectées  "+tableauvocale)
  JarvisIASpeech(body.payload.devices.length+" prises détectées "+tableauvocale)  
console.log('on vocalise et fini')
return false
}  

//console.log(tableauip)
var count=0

for(var a=0;a<tableauip.length;a++){//lampe bureau
      var temp = tableauip[a].trim()//lampe/bureau
      temp=temp.split(' ')
      console.log(temp,' trouvé')
        
        for(var b=0;b<temp.length;b++){//lampe..bureau..
//console.log(phrasedomo+ "    "+temp[b])
                if(phrasedomo.search(new RegExp(temp[b],"gi"))>-1){count=count+1;var idfinal=tableauip[a+1];var nomfinal=temp}
        }

        if(count==temp.length){console.log('trouvé : '+phrasedomo+"     "+idfinal+"    "+nomfinal);a=10000000000000}
        else{count=0}
  a++

}
if(count!==temp.length){console.log('riennnnnnnnnn');return false}
  idd=idfinal
  setState(options,idd);





})

}//fin tableau ip !==undefined


















else{
console.log(actionsmartonoff+" action demandée")
if(actionsmartonoff=="vérif"){
  console.log(body.payload.devices.length+"prises détectées ; "+tableauvocale+ " ; ")
  JarvisIASpeech(body.payload.devices.length+"prises détectées ; "+tableauvocale+ " ; ")  
console.log('on vocalise et fin')
return false
}  

//console.log(tableauip)
var count=0

for(var a=0;a<tableauip.length;a++){//lampe bureau
      var temp = tableauip[a].trim()//lampe/bureau
      temp=temp.split(' ')
      //console.log(temp,phrasedomo,temp.length)
        
        for(var b=0;b<temp.length;b++){//lampe..bureau..
//console.log(phrasedomo+ "    "+temp[b])
//console.log(phrasedomo,temp[b],count,temp.length)
                if(phrasedomo.search(new RegExp(temp[b],"gi"))>-1){count=count+1;var idfinal=tableauip[a+1];var nomfinal=temp}
        }

        if(count==temp.length){console.log('trouvé en 2 : '+phrasedomo+"     "+idfinal+"    "+nomfinal);a=10000000000000}
        else{count=0}
  a++

}
if(count!==temp.length){console.log('riennnnnnnnnn');return false}
  idd=idfinal
  setState(options,idd)

}






}







function setState(options,idd) {
    const config = (options) || {};
    const payload = (config.payload) || {};
    // Scan network otherwise or no device id in options
   const uri = this.uri+"/skill";
    payload.accessToken = tok;
    payload.devId = idd;
    // dsp 1 default
 //bri 1000    ;; colortemp 36294   ;;  colorset white   
if(brightness!==undefined){
    payload.value=brightness
    
    }
if(hsv_color!==undefined){
payload.color=hsv_color
}
    else{
    payload.value = actionsmartonoff;

    }

//payload.color="0.2,0.5"
//payload.hue="red"
    const command = config.command || 'turnOnOff';
    //debug(payload);
    const data = {
      header: {
        name: command,
        namespace: 'control',
        payloadVersion: 1,
      },
      payload:payload,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const postConfig = {
      uri:uri,
      method: 'POST',
      headers:headers,
      json: data,
    };console.log(postConfig)
    request(postConfig, function(err, response, body) {})
console.log('finiiiiiiiiiiiiiii')
return false

}




varructor(config)
}
catch(err){console.log(err);return false}
}catch(err){console.log(err);return false}
}