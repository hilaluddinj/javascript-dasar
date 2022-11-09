// 1. Method Join

// let myArr = ["Hilaluddin", "Jauhary", "Alule"];

// console.info(myArr.join(" - "));

// 2. Method Push and Pop
// myArr.push("Doddy", 2);
// console.info(myArr.join(" - "));

// myArr.pop();
// console.info(myArr.join(" - "));

// // 3. Method unshift dan shift

// myArr.unshift("Udin");
// console.info(myArr.join(" - "));

// myArr.shift();
// console.info(myArr.join(" - "));

// 4. Method Splice dan Slice

// 5. rumus splice(indexAwal, mauDihapusBerapa, elementambahan1, elemenTambahan2, dst.)

// myArr.splice(1, 0, "Udin", "Penyok");
// myArr.splice(1, 2);
// console.info(myArr.join(" - "));

// 6. Method Slice
// rumus : slice(indexAwal,indexAkhir)
// console.info(myArr.join(" - "));

// let arr2 = myArr.slice(3, 5);
// console.info(arr2.join(" - "));

// 7. Method forEach
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
let mhs = ["Hilal", "Iqbal", "Ariq", "Dizza", "Adha"];
mhs.forEach(function (e, i) {
  console.info("Mahasiswa ke - " + (i + 1) + " adalah " + e);
});

// 8. Method Map (bisa mengembalikan function)
