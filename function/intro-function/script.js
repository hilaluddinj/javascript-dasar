// function jumlahDuaBilangan(a, b) {
//   let total;

//   total = a + b;

//   return total;
// }

// function perkalianDuaBilangan(a, b) {
//   let total;

//   total = a * b;
//   return total;
// }

// console.log(jumlahDuaBilangan(5, 2));
// console.log(perkalianDuaBilangan(12, 12));

// function jumlahDuaVolumeKubus(a, b) {
//   let kubus1 = a * a * a;
//   let kubus2 = b * b * b;
//   let total;

//   total = kubus1 + kubus2;
//   return total;
// }

// console.log(jumlahDuaVolumeKubus(2, 3));

// function rumusSegitigaSamaSisi(s) {
//   let sisi = s * s * s;

//   return sisi;
// }

// console.log(rumusSegitigaSamaSisi(5));

// function rumusSegitigaSiku(a, t) {
//   let siku = (a * t) / 2;

//   return siku;
// }

// console.log(rumusSegitigaSiku(5, 4));

function tambah() {
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil = hasil + arguments[i];
  }
  return hasil;
}

let coba = tambah(4, 2);
console.log(coba);
