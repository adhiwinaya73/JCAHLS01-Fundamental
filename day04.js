// Day 04 : Function
/**
 * 1. Function : sekumpulan program yang digunakan untuk menyelesaikan tugas tertentu, dan umumnya bisa digunakan berkali-kali
 * 2. untuk menggunakan function, maka kita akan membuat function
 * 3. function bersifat reusable
 * 4. build-in function: function bawaan javascript
 * 5. user-defined function : function yang kita buat sendiri
 *  a. menggunakan keyword function
 *  b. nama function
 *  c. parameter/argument : agar function dapat menerima data dari luar function
 *  i. disimpan didalam ()
 *  ii. boleh ada, boleh tidak
 *  iii. jika argument lebih dari 1, maka harus dipisah dengan koma(",")
 */

/** Declarative Function
 * 
 * keywordFunction namaFunction(argument){
 *      // functiion code
 * 
 * }
 *  
 */
// let angka1 = 200;
// let angka2 = 25;
// function penjumlahan() {
//     let hasil = angka1 + angka2
//     console.log(hasil);
// }

// //memanggil function
// penjumlahan;

// // menggunakan/menjalankan function
// penjumlahan();

// function pengurangan(argument1, argument2) {
//     let hasil = argument1 - argument2;
//     console.log(hasil);
// }

// pengurangan(100, 35);

// /** Function expression
//  * 
//  * keywordVariable namaVariable = keywordFunction(argument){
//  *      // function code
//  * } 
//  * 
//  */

// const perkalian = function(argument1,argument2){
//     let hasil = argument1 * argument2;
//     console.log(hasil);
// }

// perkalian(3,3);

// /** Arrow Function
//  * keywordVariable namaVariable(argument)=>{
//  *      // function code
//  * }
//  * 
//  */

// const pembagian = (argument1,argument2) => {
//     let hasil = argument1 / argument2;
//     console.log(hasil);
// }

//pembagian(12,5);

// Default value argument

// const kelipatan = (numb1,numb2 = 2) =>{
//     let hasil = numb1 % numb2;
//     if(hasil==0){
//         console.log(`${numb1} adalah kelipatan ${numb2}`);
//     } else{
//         console.log(`${numb1} bukan kelipatan ${numb2}`);
//     }
    
// }



// return : keyword yang diperuntukan untuk mengeluarkan nilai dari function

// const kelipatan = (numb1, numb2 = 2) => {
//     let hasil = numb1 % numb2;
//     if (hasil == 0) {
//         return (`${numb1} adalah kelipatan ${numb2}`);
//     } else {
//         return (`${numb1} bukan kelipatan ${numb2}`);
//     }

// }

//console.log (kelipatan(15, 3));

const ganjilGenap = (number) => {
    if (number % 2 == 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}
console.log(ganjilGenap,(2));


/* <script>

    let barang = ["Jaket", "Sepatu", "Kaos"];

    let list = "";
    for (let i = 0 < barang.lenght; i ++){
        list += `${i + 1} ${barang[1]};\n`

        // console.log(list);

// namaVariableArray.forEach() : melooping sebuah data array dan tidak bisa menghasilkan array baru atau tidak menghasilkan
const cetak = (value,index) => {
        list += `${index + 1} ${value};\n`;
}
    barang.forEach(cetak); // cara 1

barang.forEach(value, index) => {
        list += `${index + 1} ${value};\n`;
});

    console.log(list);
</script> */

// namaVariableArray.map() : melooping sebuah data array dan bisa menghasilkan array baru atau menghasilkan return.

// let numb = [2, 3, 4, 1, 6,5 ];

// let kali = (value, index) => {
//     return value * 2
// // }
// let numbArr = numb.map ((value,index))=>{ cara 1

// let numbArr = numb.map((value, index)=> {
//     //return value *2
//     return `${index+1}. ini angka${value}`
// });
// //  console.log(numb);
// //  console.log(numbArr);

// const jumlah = (angka1, angka2) => {
//     return angka1 + angka2
// };

// const jumlahDikali = (cb, pengali) =>{
//     return cb (2,3) * pengali
// };
// console.log(jumlahDikali(jumlahDikali,5));

// namaVariableArray.filter() : mengolah data array sehingga menghasilkan array baru berdasarkan condition yang diberikan

let filterGenap = numb.filter((value,index) => {
    return value % 2 == 0
});
console.log(filterGenap);