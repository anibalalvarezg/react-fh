
function greetings(name) {
    return `Hello, ${name}`;
}

const greets = (name) => `Hello, ${name}`;


console.log(greets('Aníbal'))
console.log(greetings('Aníbal'));

const getUser = () => ({
    uid: 'ABC123',
    username: 'AAAAA'
});

const user = getUser();

console.log(user);