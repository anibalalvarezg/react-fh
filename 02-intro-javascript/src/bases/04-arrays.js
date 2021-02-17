// Arrays
// const arr = new Array(100);
const arr = [];
arr.push(1);
console.log(arr);

const array = [1,2,3,4,5];

let array2 = [...array, 6];

const array3 = array2.map((number) => {
    return number + 1;
});
console.log(array);
console.log(array2);
console.log(array3);