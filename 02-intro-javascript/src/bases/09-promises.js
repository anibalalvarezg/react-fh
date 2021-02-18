import { getHeroeById } from './08-exports-imports';

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('hero not found')
            }
        }, 2000);
    });

}

getHeroeByIdAsync(10)
    .then(console.log )
    .catch( console.warn );