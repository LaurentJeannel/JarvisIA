function heure(id)
{

  var date = new Date;
  var h = date.getHours();
  if(h<10)
  {
    var h = "0"+h;
  }

  var m = date.getMinutes();
  if(m<10)
  {
    var m = "0"+m;
  }

  var s= date.getSeconds();
  if(s<10)
  {
    var s = "0"+s;
  }

  var resultat = ' '+h+':'+m+':'+s;
  document.getElementById(id).innerHTML = resultat;
  setTimeout('heure("'+id+'");','1000');
  return true;
}
