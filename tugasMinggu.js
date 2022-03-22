let database = [
    {
        name: "Hoodie",
        stock: 12,
        price: 75000
    },
    {
        name: "Sepatu",
        stock: 10,
        price: 80000
    },
    {
        name: "Helm",
        stock: 12,
        price: 50000
    },
    {
        name: "Celana",
        stock: 10,
        price: 25000
    }
];
// let konfirmasi = true;

// //    const printData = () => {
// //         let listData = "";
// //         database.forEach((value, index) => {
// //             listData += `${index + 1} ${value};\n`;
// //         });
// const printData = () => {
//     return database.map((value, idx) => {
//         return `${idx + 1}. ${value.name}, Stoknya ${value.stock}, Harganya Rp. ${value.price}`
//     }).join("\n");

// }
// while (konfirmasi) {
//     let menu = parseInt(prompt(`Menu data buah :
//         1. Lihat data
//         2. Tambah data
//         3. Hapus data
//         4. Edit data
//         `))

//     if (menu == 1) {
//         alert(`List data :\n${printData()}`)
//     } else if (menu == 2) {
//         let tambah = [
//             {
//                 name: "",
//                 stock: "",
//                 price: "",

//             }
//         ];
//         tambah.name = prompt(`Masukkan nama baru`);
//         tambah.stock = prompt(`Masukkan stock baru`);
//         tambah.price = prompt(`Masukkan harga baru`);
//         database.push(tambah);

//     } else if (menu == 3) {
//         let no = parseInt(prompt(`Pilih data yang akan dihapus :\n ${printData()}`));
//         database.splice(no - 1, 1);
//     } else if (menu == 4) {
//         let editData =
//         {
//             name: "",
//             stock: "",
//             price: "",

//         }
//             ;
//         let edit = parseInt(prompt(`Pilih data yang akan diedit :\n${printData()}`));
//         editData.name = prompt("Masukan data :");
//         editData.stock = prompt("Masukan stock  : ");
//         editData.price = prompt("Masukan harga : ");
//         database.splice(edit - 1, 1, editData);

//         // let no = parseInt(prompt(`Pilih data yang akan diedit :\n${printData()}`));
//         // let newData = prompt("Masukan data baru :");
//         // database[no - 1] = newData;
//     } else {
//         alert("Menu yang anda cari tidak ada")
//     }
//     konfirmasi = confirm("Kembali ke menu utama")

// }

// let jumlah = 0;{
// database.forEach(function (value, index) {
//     jumlah += value.price
// })
// console.log(jumlah);
// }
// // 2 Menghitung total harga menggunakan duplikasi fungsi forEach
// const duplicateForEach=(cbfn,array)=>{
//     for (let i = 0; i < array.length; i++) {
// cbfn (array[i],i);
//     };
// let jumlah = 0
// duplicateForEach((value,index)=>{
//     jumlah += value.price
// }, database)
// console.log(jumlah);
    
// 3 Membuat list barang menggunakan duplikasi fungsi map

// const duplicateMap = (cbfn, array) => {
//     let tempArr = [];
//     for (let i = 0; i < array.length; i++) {
//         tempArr.push(cbfn(array[i], i))
//     }
//     return tempArr;
// };

// let newDB = duplicateMap((value, index) => {
//     // listData += value.price
//     return `${index+1}. ${value.name}, Stoknya ${value.stock}`
// }, database)
// console.log(newDB.join);

// 4 Membuat list filter barang
// const duplicateMap = (cbfn, array) => {
//     let tempArr = [];
//     for (let i = 0; i < array.length; i++) {
//         tempArr.push(cbfn(array[i], i))
//     }
//     return tempArr;
// };

// let newDB = duplicateMap((value, index) => {
//     // listData += value.price
//     return `${index + 1}. ${value.name}, Stoknya ${value.stock}`
// }, database)
// // console.log(newDB.join);

// // Mmebuat filter
// const duplicateFilter = (cbfn, array) => {
//     let tempArr = [];
//     for (let i = 0; i < array.length; i++) {
//         let bool = cbfn(array[i],i);
//     if (bool){
//     tempArr.push(array[i])
//     }
// }
// return tempArr;
// };
// let newDB = duplicateFilter((value, index) => {
//     return value.price > 50000;
//     // listData += value.price
// }, database)
// console.log(newDB);

// object function
// let student ={
//     nama: "Edo Renaldo",
//     usia: 20,
//     kelas: "IPA"
// }

// Object.keys(student);
// console.log(Object.keys(student))

let student = {
    nama: "Edo Renaldo",
    usia: 20,
    kelas: "IPA"
}
const duplicateGetValue=(obj)=>{
    let temp = [];
    for (let property in obj) {
    temp.push(obj[property]);
}
return temp;
};
console.log(duplicateGetValue(student));
    



