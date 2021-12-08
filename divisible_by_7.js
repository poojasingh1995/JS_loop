// for (var i=1;i<=100;i++){
//     if (i%7==0){
//         console.log(i,"it is divisible")
//     }
//     else{
//         console.log(i,"it is not divisible")
//     }
// }


// nested for loops
// first loop
for (let i = 1; i <= 3; i++) {
    // second loop
    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
          break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}