/////////////// LOOP STATEMENT //////////////
// LOOP : perulangan

/**
 * A. WHILE LOOP : digunakan ketika akhir loop tidak pasti
 * 
 * while(condition){
 *      // program yang ingin dijalankan
 * }
 */

// Example :
let nilai = 10;

while (nilai > 0) {
    console.log("Angka :", nilai);
    nilai--;
}

// tanpa loop
// console.log("Angka :", 10) dan seterusnya

/**
 * B. DO...WHILE LOOP
 * 
 * do{
 *     // program yang ingin dijalankan 
 * }while(condition);
 * 
 */
let count = 1;
do {
    console.log(`Bus No. ${count}`);
    count++;
} while (count <= 10);

/**
 * C. FOR LOOP : digunakan ketika tau batas looping
 * 
 * for(statement_1;statement_2;statement_3){
 *      // Program yang ingin dijalankan
 * }
 * 
 * statement_1 : variable yang mendefinisikan nilai awal dari batas looping
 * statement_2 : condition untuk memeriksa variable statement_1 denga batas loopingnya  apakah bernilai true
 * statement_3 : berisi perintah increment atau decrement terhadap statement_1
 * 
 * keuntungan : kita dapat membatasi jumlah loop sejak awal
 */

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("BizzBuzz =>", i);
    }
    else if (i % 3 === 0) {
        console.log("Bizz =>", i);
    }
    else if (i % 5 === 0) {
        console.log("Buzz =>", i);
    }
}




