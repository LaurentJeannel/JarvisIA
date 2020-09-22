function date(id)
{
	 // les noms de jours / mois
     var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
     var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
     // on recupere la date
     var date = new Date();
     // on construit le message
     var resultat = jours[date.getDay()] + " ";   // nom du jour
     resultat += date.getDate() + " ";   // numero du jour
     resultat += mois[date.getMonth()] + " ";   // mois
     resultat += date.getFullYear();
   
  document.getElementById(id).innerHTML = resultat ; 
  setTimeout('date("'+id+'");','60000');
  return true;
}



