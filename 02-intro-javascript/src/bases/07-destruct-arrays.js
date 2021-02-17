const characters = ['Goku', 'Vegeta', 'Gohan'];

const [ p1 ] = characters;
const [ , p2 ] = characters;
const [ , , p3 ] = characters;

console.log(p1);
console.log(p2);
console.log(p3);

const returnArray = () => {
    return ['ABC', 123];
};

const [letters, numbers] = returnArray();
console.log(letters, numbers);


const test = ( value ) => {
    return [value, () => { console.log('Hola mundo')}];
};

const [name, helloWorld] = test('Anibal');

console.log( name );
helloWorld();