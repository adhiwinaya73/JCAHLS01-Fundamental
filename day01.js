var nama = "Abdi";
var nama = "Edo";
nama = "Budi";
console.log(nama);

// keyword let : Non-Redeclare, Reassign

let age = 26;
// let age = 20; // Redeclare 
age = 30;

console.log(age);

// keyword const : Non-Redeclare, Non-Reassign
const PI = 3.14;
//const PI = 14; Redeclare ❌
// PI = 22 / 7; // Reassign

console.log(PI);

///////////////// ATURAN PENULISAN VARIABLE //////////////
// 1. Harus diawali huruf
// let 1nama ; ❌
let pekerjaan; // ✔
var alamat = "Surabaya"; // ✔

// 2. Boleh diawali dengan symbol (_ atau $)
let _telp = "0893838399399"
let $fax = "09878788988";

// 3. variable yang terdiri dari 2 suku kata atau lebih
let fullName = "Abdi Alghi"; // cameCase
let harga_barang = 20000; // snake_case
let namaproduk = "Air Jordan"; //
// let stok barang; // ❌
// let stok-barang; // ❌

// shift + alt + f : merapikan program
// windows + . = emoticon
// ctrl + s = untuk save program
// ctrl + / : membuat comment
// ctrl + f : mencari program
// ctrl + ` : membuka terminal

/////////////////////////////////////// DATA TYPE ///////////////////////////
// String : untuk huruf atau character
let namaToko = "Gladius 'A' \"Toko\" Olahraga"; // double quote
let nama_toko = 'Gladius \'B\' Toko Olahraga'; // single quote
let namatoko = `Gladius 'C' "Toko" Olahraga`; // backthick
console.log(namaToko);
console.log(nama_toko);
console.log(namatoko);

let alamatToko = "Jl. Sudirman No 23";

//let alamatLengkap = namaToko + " " + alamatToko; // cara 1
let alamatLengkap = `Pak Eko, ${namaToko}, ${alamatToko}`; // cara 2

console.log(alamatLengkap);

///////////// FUNGSI PADA TIPE DATA STRING /////////////
let greeting = "Hello, Purwadhika Student";

// typeof : memeriksa tipe data dari suatu variabel atau nilai
console.log("🚧output dari typeof====>", typeof greeting); // nilai dari variable
console.log("🚧output dari typeof====>", typeof "hello"); // nilai langsung

// string.lenght = menghitung panjang data string
console.log("🚧output dari string.lenght====>", greeting.length); 

// string.toLowercase() : meribah semua huruf menjadi huruf kecil
console.log("🚧output dari string.toLowerCase() ====>", greeting.toLowerCase());

//bisa juga pake uppercase

//string.includes() : memastikan sebuah kata ada pada variable
console.log("🚧 output dari string.includes('kata_cari') ====>", greeting.includes("Purwadhika"));


// Number : berkaitan dengan angka

let jarak = 1500; // Nilai INT/INTEGER atau nilai bulat
let berat = 90.25; // Nilai FLOAT atau desimal
let saldoATM = 25e6; // 25000000

//console.log(saldoATM);

// Aritmetic operator : +, -, *, /, %
let hasil = jarak + 500; // bisa kurang bagi kali 

// Increment
jarak++; // 1501
jarak++; // 1502
jarak++; // 1503
jarak++; // 1504

jarak += 5; // ==> jarak = jarak + 5; //1509
jarak += 5; // ==> jarak = jarak + 5; //1514


// Decrement
jarak--;
jarak--;
jarak--;
jarak--;

jarak -= 5;
jarak -= 5;
console.log("Jarak ===> ", jarak);

////////// Math Object //////////
const PI_CIRCLE = Math.PI;
console.log(PI_CIRCLE);

console.log(Math.abs(-25.5)); // nilai absolute positif
console.log(Math.abs(-25.5) * -1); // nilai absolute negatif
console.log(-Math.abs(-25.5)); // nilai absolute negatif

console.log(Math.pow(4,2)); // pangkat
console.log(Math.sqrt(4)); // akar pangkat 2
console.log(Math.cbrt(8)); // akar pangkat 3

// Pembulatan
console.log(Math.round(2,5)); // pembulatan ke nilai terdekat
console.log(Math.ceil(2,1)); // pembulatan selalu ke atas
console.log(Math.floor(2,9)); // pembulatan selalu ke bawah

console.log(Math.min(3,2,5,67,3,1)); // mencari nilai terkecil
console.log(Math.max(3, 2, 5, 67, 3, 1)); // mencari nilai terbesar
console.log(Math.random()); // membuat nilai random dari 0,xx s/d 1

// Parsing data string to number
let angka = "123.456";

console.log(typeof angka);
console.log(parseInt(angka)); // 123
console.log(parseFloat(angka)); // 123.456

// Parsing data number to string
let angkaB = 150050;

console.log(angkaB.toString());
console.log(angkaB.toLocaleString());

// memeriksa data apakah sebuah angka
console.log(isNaN(2)); // false
console.log(isNaN("ABCDE")); // true
console.log(isNaN("12")); // false

// Boolean : nilai benar =>> TRUE atau salah =>> FALSE
let benar = true;
let salah = false;

//Comparison Operator : >, <, >=, <=, ==, ===, !=
let angka_A = 20;
let angka_B = 15;
console.log("Comparison : ", angka_A > 
angka_B); // true
console.log("Comparison : ", angka_A <
angka_B); // false
console.log("Comparison : ", angka_A ==
angka_A); // true
console.log("Comparison : ", angka_A ==
angka_B); // false
console.log("Comparison : ", angka_A !=
angka_B); // true
console.log("Comparison : ", angka_A ==
20); // true
console.log("Comparison : ", angka_A ==
"20"); // true +>> selama nilainya sama tipe data berbeda akan menghasilkan true
console.log("Comparison : ", angka_A ===
    "20"); // false +>> nilai dan tipe datanya harus sama akan menghasilkan true

    //Logical Operator : AND, OR, NOT

    // AND : akan menghasilkan nilai TRUE apabila kedua perbandingan bernilai TRUE
    console.log("Logical AND : ", true && true); // true
console.log("Logical AND : ", true && false); // false
console.log("Logical AND : ", angka_A > 19 && angka_B < 19); // true
console.log("Logical AND : ", angka_A < 19 && angka_B < 19); // false

// OR : selama ada yang bernilai TRUE maka hasilnya adalah TRUE
console.log("Logical OR : ", true || true); // true
console.log("Logical OR : ", true || false); // true
console.log("Logical OR : ", false || false); // false
console.log("Logical OR : ", angka_A >= 15 || angka_B <= 15); // true

// NOT : membalik logika
console.log("Logical NOT : ", !true); // false
console.log("Logical NOT : ", !false); // true

// Tipe data Truthly dan Falsy
// Truthly : tipe data yang bernilai true
console.log(Boolean(2)); //true
console.log(Boolean("ABSCD")); //true
console.log(Boolean(true)); //true
console.log(Boolean(-2)); //true
console.log(Boolean("false")); //true
console.log(Boolean(" ")); //true

// Falsy : nilai pada tipe data yang bernilai false
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false


