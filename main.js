for ( let i = 1 ; i <11 ; i ++ ) {
     console.log (i);
}
// me2
for ( let i = 10; i >0; i -- ) {
     console.log(i);
}
// me3
// (1 + 2 + 3 + ... + 50) ეს არის ჯამი
let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log(sum);
// მე4
// იქნება 5 იტერეცია 0  2  4  6  8
// მე5  ბრეიქ ამთავრებს ციკლს როცა მას ვუთითებთ.ის ნიშნავს ციკლიდან გამოსვლას მაგალითად იპოვე 100 და გაჩერდი 
for ( let i=0; i <10; i ++ ) {
     if (i === 4 ) {
          break;
     }
     console.log ( i )
}
//  me6 skip the iteration aris prosta videos qonda gachedili da kargad vermivxvdi rogor mushaobs.magalitze dayrdnobit tovebs am cikls
for ( i = 1; i <7 ; i ++ ) {
     if ( i ===3 ) {
          continue;
     }
     console.log ( i )
}
// me7 es ver gavakete 
// let x = 27;
// let randomNum;
// for ( i = 0; i ++ ) {
//      randomNum = Math.floor(Math.random() * 101);
//      while ( randomNum !== 27 ) {
//           console.log(randomNum);
//      }
// }


//8 c ver
// 9 და 10
