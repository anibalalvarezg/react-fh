
const person = {
    name: 'Anibal',
    lastname: 'Alvarez', 
    age: 27,
    address: {
        city: 'Santiago', 
        zip: 23213232
    }
};

console.table( person );

// const person2 = person; // Copy by reference
// person2.name = 'Nicolas';
const person2 = { name: 'Nicolas',...person };

console.log(person2);

console.log(person);

