import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp.js';
import heroes from '../../data/heroes';
describe('Tests heroes functions', () => {
    test('should return a hero by id ', () => {
        const id = 1; 
        const heroe = getHeroeById(id); 

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('should return and undefined if heroe doesn\'t exists', () => {

        const id = 10; 
        const heroe = getHeroeById(id); 

        expect(heroe).toBe(undefined);
    });
    

    test('should returns array with DC heroes', ()=> {
        const owner = 'DC'; 
        const heroes = getHeroesByOwner(owner); 

        const heroesData = heroes.filter(h => h.owner === owner); 

        expect(heroes).toEqual(heroesData);
    });

    test('should returns array with Marvel heroes', () => {
        const owner = 'Marvel'; 
        const heroes = getHeroesByOwner(owner); 
        expect(heroes.length).toBe(2);
    });
});