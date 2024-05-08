/* 
var x = 1;
var y = 5339;
while (x <= 10) {
  console.log(`${y} x ${x} = ${x * y}`);
  x++;
}
*/

/* 
var y = 2;
for (var i = 1; i <= 10; i++) {
    console.log(`${y} x ${i} = ${y * i}`);
} 
*/

// do while
/* 
var x = 1;
do {
    console.log(x);
    x = x + 2;
} while (x < 10); 
*/

// var studentNames = ["Shohebul", "Raisa", "Priyanka", "Jui"];

/* 
for (var i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i]);
} 
*/

/* 
studentNames.forEach(function (name) {
    console.log(`Student Name : ${name}`);
}); 
*/

var ages = [20, 25, 22, 23, 30, 35, 37, 18];

var youngAges = ages.filter(function (age) {
    return age < 30;
})

console.log(youngAges);





