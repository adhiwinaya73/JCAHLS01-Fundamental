// let simbol = "# # # # #";
// for (i = 0; i < 5; i++)
// console.log(simbol);


// var symC = ""
// for (let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 5; j++){
//         if (i == j) {
//             symC += `${i} `
//         } else {
//             symC += `0 `
//         }
//     }
//     if (i < 5){
//         symC +="\n"
//     } 
// }
// console.log(symC);

// var symC = ""
// for (let i = 1; i <= 5; i++) {
//     for (let j = i; j >= 1; j--) {
//             symC += `# `
        
//     }
//     if (i < 5) {
//         symC += "\n"
//     }
// }
// console.log(symC);

var symC = ""
for (let i = 1; i <= 5; i++) {
    for (let j = i; j >= 1; j--) {
        symC += `# `

    }
    if (i < 5) {
        symC += "\n"
    }
}
console.log(symC);

