// question 1

var stringValue = "This is a string";

// question 2

var person = {
    name: "Ahed",
    age: 29
};

//question 3

var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

//question 4

var fiveNumbersArray = [4, 8, 9, 7, 10];
for (var i = 0; i < fiveNumbersArray.length; i++) {
    console.log(fiveNumbersArray[i]);
}

//question 5

for (var i = 15; i <= 25; i++) {
    console.log(i);
}

//question 6

for (var i = 15; i <= 25; i++) {
    if (i === 20) {
        console.log(i);
    }
}

//question 7

var members = [
    {
    name: "Dani",
    single: true,
    age: 21
    },
    {
    name: "Linda",
    single: false,
    age: 27
    }
];

for (var i = 0; i < members.length; i++) {
    console.log(members[i].single);
    console.log(members[i].age);
}

//question 8

function whatIDontLike(disliked) {
    console.log("I don't like " + disliked);
}

whatIDontLike("washing dishes");

//question 9

function myAccount(income, outgoings) {
    console.log(income - outgoings);
}
myAccount(3000, 2500);

//question 10

var companyArray = [];

function addCompanyToArray(company){
    companyArray.push(company);
}

addCompanyToArray("Google");
addCompanyToArray("Apple");
addCompanyToArray("Microsoft");

console.log(companyArray);