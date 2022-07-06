// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum1 = numbers.reduce((accumulator, currentNumber) => {
//   console.log(accumulator + " ||| "+ currentNumber);
// });

// console.log('sum1 =', sum1);

const db = require("./app/src/config/db");

db.query("select * from users",(err, data) =>{
  
  console.log(data);
});