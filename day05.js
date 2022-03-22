// Day 05 : object => data penampung seperti array, tetapi tidak harus berurutan. dan alamatnya itu menggunakan property

/**
 * Array => penampung data yang berdasarkan alamat index
 * object => penampung data yang berdasarkan alamat nama property
 * 
 * let variableArray = [data1, data2, data3];
 * 
 * let variableobject = {
 * namaProperty:data,
 * namaProduct:"Sepatu Air Jordan",
 * price:250000,
 * isReady:true,
 * size:[42,43,45],
 * total:(param)=>{block code}
 * }
 * 
 **/
// Menulis data object
// cara 1 : syntax object literal
let instructor = {
    name: "Abdi Alghi",
    class: "JCWDAHLS-01",
    age: 27,
    materi: [
        "Fundamental", "Front-end", "Back-end"
    ]
};

// console.log(instructor.name);
// console.log(instructor["materi"]);

// // cara 2 : Syntax object "new" keyword
// let student = new Object()

// student.name= "Andrew";
// student.age= 23;
// student.classes= "Full stack";
// //student.age = 18; // cara re-assign

// // Object Destructuring
// let {name, age, classes} = student;

// console.log(age);
// console.log(student);

// let product = [
//     {
//         name: "Hoodie",
//         stock: 12,
//         price: 75000
//     },
//     {
//         name: "Sepatu",
//         stock: 10,
//         price: 80000
//     }
// ];

// console.log(product[0].name)

// // Object Destructuring Array
// let data = ["Edo", "Jr", 27];
// let [namaDepan, namaBelakang, usia] = data;
// console.log(namaDepan);
// console.log(namaBelakang);
// console.log(usia);

// Looping pada object
for(let property in instructor){
    console.log(property);
}