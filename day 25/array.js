var studentNames = ["Kamal", "Jamal", "Tomal", "Akmal"];

var studentInfo = [
    ["Abul", 23, "Dhaka"],
    ["Babul", 25, "Chittagong"],
    ["Kabul", 27, "Rajshahi"],
    ["Sabul", 29, "Khulna"]
]

console.log(studentInfo[2][2]);

studentNames.push("Rahim");
studentNames.push("Karim", "Rahima");
studentNames.pop();
studentNames.unshift("Salam");
studentNames.unshift("Kalam", "Rahima");
studentNames.shift();

studentNames.splice(studentNames.indexOf("Kamal"), 1);

console.log(studentNames);