const firstName = "Shaun";

let lastName = "Gillow";

let myAge = 31;

let myCity = "Gainesville";

console.log(`Hello! My name is ${firstName} ${lastName}! I’m ${myAge} years old, and I’m from ${myCity}. It’s nice to meet you!`);

let myInitials = firstName[0] +lastName[0];

console.log(myInitials);

let nameLength = firstName.length;

console.log(nameLength);

let myFullName = firstName + " " + lastName;

console.log(myFullName.toUpperCase());

const sayGreeting = (firstName, lastName, myAge, myCity) => {
    return `Hello! My name is ${firstName} ${lastName}! I’m ${myAge} years old, and I’m from ${myCity}. It’s nice to meet you!`;
}

console.log(sayGreeting("Laura", "Kuzara", 31, "Gainesville"));
