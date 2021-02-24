import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Tests with promises', () => {
    test('should return a heroe async ', ( done ) => {
        const id = 1; 
        getHeroeByIdAsync(id)
            .then( heroe => {   
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });
    test('should return a error if heroe doesn\'t exists', ( done ) => {
        const id = 10; 
        getHeroeByIdAsync(id)
            .catch( error => {   
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
    
});