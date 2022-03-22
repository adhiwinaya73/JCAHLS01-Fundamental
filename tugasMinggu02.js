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

let student = {
    nama: "Edo Renaldo",
    usia: 20,
    kelas: "IPA"
}
const duplicateGetValue = (obj) => {
   
    let temp = [];
    for (let property in obj) {
console.log(`${property}`)
        temp.push(obj[property]);
    }
    return temp;
};
console.log(duplicateGetValue(student));