import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Test in 05 funciones', () => {

    test('getUser should return object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
    
        const user = getUser(); 

        expect(user).toEqual(userTest);
    }); 

    test('getUsuarioActivo should return object', () => {
        const name = 'Anibal'; 
        const user = getUsuarioActivo(name);

        expect(user).toEqual({
            uid: 'ABC567',
            username: name            
        });

    });
    
});