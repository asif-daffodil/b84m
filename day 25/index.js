function myInfo (name, city) {
    return "My name is " + name + " and I am from " + city + ".";
}

console.log(myInfo("Asif", "Dhaka")); 
console.log(myInfo("Rahim", "Chittagong"));

var x = 10;
if (x < 5) {
    console.log("Hello World!");
}else{
    console.log("Goodbye!");
}

// create a function
// function will take a number as an argument
// function will validate the number is a number or not
// function will check that the number is even or odd

function evenOrOdd (num) {
    if (typeof num !== "number") {
        return "Please provide a number!";
    }else if (num % 2 === 0) {
        return "Your provided number is " + num + " and it is even!";
    }else{
        return "Your provided number is " + num + " and it is odd!";
    }
}

console.log(evenOrOdd("Dhaka"));

// create a function
// function will take an age as an argument
// function will validate the age is a number or not
// if the age is 12 or under 12, then the function will return "You are a child!"
// if the age is 13 to 19, then the function will return "You are a teenager!"
// if the age is 20 to 29, then the function will return "You are an adult!"
// if the age is 30 to 49, then the function will return "You are a middle-aged person!"
// if the age is 50 to 150, then the function will return "You are an old person!"
// if the age is greater than 150 or less then 0, then the function will return "You are a ghost!"