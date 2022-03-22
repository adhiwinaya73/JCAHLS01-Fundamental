// ARRAY OBJECT
/***
 * 1. Merupakan struktur data yang biasa digunakan untuk output database
 * 2. juga digunakan untuk daya JSON (Javascript Object Notation)
 * 3. Struktur penulisan : 
 *      let arrObj = [
 *      {
 *          id: 1,
 *          name:"Jacket",
 *          stock:[
 *          {
 *              type:"Red",
 *              qty:20
 *          }
 * 
 *          ]   
 *      }
 * 
 * ]
 */

// Array.map() ==> Ditujukan untuk mengolah data Array of object =>> output: Array
// Array.filter() ==> Ditujukan untuk memfilter data Array of object =>> output: Array
//Array.findIndex() ==> Ditujukan untuk mencari alamat index =>> output: Number

let dataProduct =[
    {
        name:"Jacket",
        price: 85000,
        stock:[
            {
                type:"M",
                qty: 8
            },
            {
                type: "L",
                qty: 12
            },
            {
                type: "XL",
                qty: 15
            }
        ]
    }
]
let searchData=dataProduct.filter((value,index)=>{
    return value.name == "Jacket"
})

let dataIdx = dataProduct.findIndex((value,index)=>{
    return value.name == "Jacket"
})

// console.table(searchData);
// console.table(dataIdx);
dataProduct[dataIdx].name = "Jaket";

// Concatination ==> Penggabungan data atau menduplikasi data
let mobil = ["Tesla", "Ferrari", "Lamborgini"];
let motor = ["Honda", "Yamaha", "Kawasaki"];
// let kendaraan = mobil.concat(motor,["KTM","Wuling"]); // cara 1
// let kendaraan = [...mobil, ...motor, "Harley","HasQ"];

let sepedaMotor = [...motor];
sepedaMotor[0]="SUZUKI";

// console.log(motor);
// console.log(sepedaMotor);

let dbA = {
    name: "Reno",
    usia: 12,
    alamat: "BSD"
}
let dbB = {
    pekerjaan: "Coder",
    gaji: 7500000
}

let dataDB = {...dbA, ...dbB, alamat:"Sudirman Tamrin", status: "Aktif"};
console.log(dataDB);

//kalo nama property sama, akan nimpa ke yang lama/awal cnth alamat BSD jadi Sudirman Tamrin


