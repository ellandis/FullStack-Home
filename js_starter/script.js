console.log('Hello World');

var namde = 'Eian';

console.log(namde);

//skipping to functions

function sayHello(){
    console.log("Hello World!!!!!");
}
function sayMyName(nam){
    console.log(nam + "!!!!!")
}
function cube(number){
    console.log(number * number * number);
}
sayHello();
sayMyName("Easy");
cube(14);

//ARRAYS

var books = ['book1','book2','book3'];

books.forEach(element => {
    console.log(element + " is a book i read.");
});

for (let index = 0; index < books.length; index++) {
    const element = books[index];
    console.log(element);
}

books.forEach(function(book){
    console.log("another way to loop arrays " + book);
});

var numbers = [];

for (let i = 0; i < 20; i++) {
    numbers.push(i);  
}

numbers.forEach(function (num) {
    if(num % 5 === 0){
        console.log(num);
    }
})

//OBJECTS

// var = student = ['sheldon', 36, 'caltech'];
var student = {
    name:'sheldon',
    age: 36,
    school: 'calTech'
};

console.log(student['name']);

console.log(student.age);
console.log(student.school);

var student13 = {
    name:"Jon",
    age: 19,
    friends: ['Aria','Bria','Eian'],
    bestFriend:{
        firstName: 'GOD',
        birthYear: 2025
    }
};

var bf = student13.bestFriend.firstName;
console.log(bf);

var fd2 = student13.friends[1];
console.log(fd2);

var colors = {};

colors.orange = {code: 123};
console.log(colors.orange.code);

colors.black = {code: [7,8,9]};
console.log(colors.black.code[1]);

var blogPosts = [
    {
        title: 'weather',
        content: 'Rainy day',
        comments: [
            {
                name: 'james',
                comment: "I love days like this"
            },
            {
                name: 'rock',
                comment: "Get Loved give love"
            }
        ]
    },
    {
        title: 'weather',
        content: 'Sunny days'
    }
];

console.log(blogPosts[0].title);
console.log(blogPosts[0].comments[0].comment);

// OBJECT METHONDS

var landis = {
    name: 'Eian',
    age: 39,
    hasGone: true,
    friends: ['Bria', 'GOD'],
    say: function () {
        console.log('Function inside an Object');
    }
}

landis.say();

console.log(this);

var tryThis = {
    name: 'easy',
    year: 1986,
    sayHey: function () {
        console.log(this);
        console.log("say hey " + this.name);
    }
};

tryThis.sayHey();