console.log('Hello World');

const enable = true;

// let message = '';

// if ( enable ) {
//     message = 'Enable'; 
// } else {
//     message = 'Disable'; 
// }

const message = ( enable ) ? 'Enable' : 'Disable';
const action = enable && 'Enable';

console.log(message);