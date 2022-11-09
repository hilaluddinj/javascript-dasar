// Ini Variabel Global / window
var a = 15;

// Di Function adalah variabel lokal (Function Scope)
function tes() { 
  var a = 30;
  console.log(a);
}

tes(a);
