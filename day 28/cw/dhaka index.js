// const studentName = 'Jui Khanam';
// const city = 'Dhaka';
const studentsInfo = [
    {
        studentName: 'Jui Khanam',
        age: 20,
        city: 'Dhaka',
        country: 'Bangladesh',
        friendList: ['Rahim', 'Karim', 'Jabbar'],
        bestFriend: {
            name: 'Rahim',
            age: 22,
            city: 'Dhaka'
        }
    },
    {
        studentName: 'Rahim Khan',
        age: 22,
        city: 'Dhaka',
        country: 'Bangladesh',
        friendList: ['Jui', 'Karim', 'Jabbar'],
        bestFriend: {
            name: 'Jui',
            age: 20,
            city: 'Dhaka'
        }
    },
    {
        studentName: 'Karim Khan',
        age: 24,
        city: 'Dhaka',
        country: 'Bangladesh',
        friendList: ['Rahim', 'Jui', 'Jabbar'],
        bestFriend: {
            name: 'Rahim',
            age: 22,
            city: 'Dhaka'
        }
    },
    {
        studentName: 'Jabbar Khan',
        age: 26,
        city: 'Dhaka',
        country: 'Bangladesh',
        friendList: ['Rahim', 'Karim', 'Jui'],
        bestFriend: {
            name: 'Rahim',
            age: 22,
            city: 'Dhaka'
        }
    }
];

studentsInfo.forEach(student => {
    console.log(student.studentName);
});

const juiString = JSON.stringify(studentsInfo);

const myStudents = JSON.parse(juiString);

// console.log(myStudents);

//  Math
const number = 5.9;
const roundNumber = Math.round(number);
const ceilNumber = Math.ceil(number);
const floorNumber = Math.floor(number);
const random = Math.floor(Math.random() * 100);