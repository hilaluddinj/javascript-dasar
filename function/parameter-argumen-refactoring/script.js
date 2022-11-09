// yang di dalam kurung atas namanya parameter
// sedangkan yang di luar dan dipanggil itu namanya argumen, contoh :

// function jumlahDuaAngka(a, b) {
//   return a + b;
// }

// let a = parseInt(prompt("Masukan nilai a = "));
// let b = parseInt(prompt("Masukan nilai b = "));

// console.log(jumlahDuaAngka(a, b));

// Refactoring

let jumlahVolumeDuaKubus = function (a, b) {
  return a * a * a + b * b * b;
};

console.log(jumlahVolumeDuaKubus(20, 40));
