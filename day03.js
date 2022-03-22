// Day 03 : Array Data Type
/**
 * 1. Definisi : Sebuah tipe data penampung, dikarenakan dapat menampung banyak data dan berbagai tipe data yang lain. setiap data pada array itu memiliki alamat index. index pada array itu memiliki tipe data angka/number.
 * 2. Tujuan : mempermudah pengelolaan data.
 * 3. Array bertipe object
 * 4. Array itu ditandai dengan [ data1, data2...]
 */
// let polin ="Malam";
// let arrPolin = polin.split(''); // merubah string menjadi array
// console.log(arrPolin);

////// ARRAY FUNCTION ///////
let namaBuah = ["Apel", "Jeruk", "Durian", "Melon"];
let stock = ["10", "15", "25", "12"];
let harga = ["5000", "2500", "10000", "7000"];
namaBuah[0] = "Semangka";
let hasil = '';
for (let i=0; i<namaBuah.length; i++){
 hasil += `${i+1} Buah ${namaBuah[i]} stoknya ada ${stock[i]} dan harganya Rp. ${harga[i]};\n`
}
console.log(hasil);

// namaVariable.splice(indexAwal, jumlahDataYangDihapus, dataBaru) : menghapus data array pada index tertentu
// Fungsi 1 : menghapus data array pada index tertentu
let mobil =["Daihatsu", "Toyota", "Lexus", "BMW"]

