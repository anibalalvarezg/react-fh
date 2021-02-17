const person = {
    name: 'Anibal', 
    age: 27, 
    password: 'asd123',
};

const {name, age, password: pass} = person;

console.log({name, age, pass});


const personReturn = ({name, age, password, range = 'soldier'}) => {
    console.log({name, age, password, range});
    return {
        password2: password,
        name2: name,
    }
}

const { password2, name2 } = personReturn( person );

console.log({password2, name2});