// Membuat Fungsi rekursif

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// Membuat Rumus faktorial menggunakan function rekursif
function cobaRekursif(n) {
  if (n === 0) return 1;
  return n * cobaRekursif(n - 1);
}

let n = parseInt(prompt("Masukan pilihan angka anda ="));
alert(cobaRekursif(n));
