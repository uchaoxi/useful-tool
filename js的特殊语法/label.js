//label语句可以和continue,break配合，实现类似goto的效果
//eg1:
// var num = 0;
// numlabel:
// for (var i = 0; i < 10; i++) {   
//     for (var j = 0; j < 10; j++) {
//         if (i == 5 && j == 5) {
//             continue numlabel;           
//         }
//         num++;
//     }
// }
// console.log(num);

//eg2
var i, j;
loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i == 1 && j == 1) {
         continue loop1;
      }
      console.log("i = " + i + ", j = " + j);
   }
}