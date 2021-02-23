import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Test 02 template string', () => {
    test('GetSaludo should return Hola Anibal', () => {
        const name = 'Anibal'; 
        const greeting = getSaludo(name);
        console.log(greeting);
        expect(greeting).toBe('Hola Anibal'); 
    });

    test('should return Hola Fernando', () => {
        expect( getSaludo() ).toBe('Hola Fernando');
    })
    
});