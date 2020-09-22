var fs = require('fs')
var p = require('path')
  ;

function recursiveReaddirSync(path) {
  var list = []
   var files = fs.readdirSync(path)
var stats
    ;

  files.forEach(function (file) {
    
    try{
    stats = fs.lstatSync(p.join(path, file));
    }
    catch(err){stats="";return}

    if(stats.isDirectory()) {
      list = list.concat(recursiveReaddirSync(p.join(path, file)));
    } else {
      list.push(p.join(path, file));
    }
  });

  return list;
}

module.exports = recursiveReaddirSync;
