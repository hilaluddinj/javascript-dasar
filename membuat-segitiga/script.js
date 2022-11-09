let s = "";
let pola = 5;

for (var i = 1; i < pola; i++) {
  for (var j = pola; j >= i; j--) {
    s += " ";
  }

  for (let k = 1; k <= i; k++) {
    s += "*";
  }

  for (let m = 1; m <= i - 1; m++) {
    s += "*";
  }

  s += "\n";
}

for (var i = 1; i <= pola; i++) {
  for (var j = 0; j <= i; j++) {
    s += " ";
  }

  for (let k = pola - 1; k >= i; k--) {
    s += "*";
  }

  for (let m = 3; m >= i; m--) {
    s += "*";
  }

  s += "\n";
}

console.log(s);
