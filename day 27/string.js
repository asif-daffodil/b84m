// String length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

// String charAt()
console.log(text.charAt(5));

// String charCodeAt()
console.log(text.charCodeAt(0));

//  String at()
console.log(text.at(5));

// String [ ]
console.log(text[6]);

// Task
/**
 * 1 line sentence will be given
 * reverse the sentence bt using lenth, loop, String [], array_unshift()
 */

const reverseSentence = (sentence) => {
    let reversed = [];
    for (let i = 0; i < sentence.length; i++) {
        reversed.unshift(sentence[i]);
    }
    return reversed.join('');
}

console.log(reverseSentence("Dhaka is the capital of Bangladesh"));
let students = ["Jui", "Sohebul", "Hasnat", "Raisa"];
students.unshift("Priyanka");

let arr2str = students.join('');
console.log(arr2str);

