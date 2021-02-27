import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Test async-await and fetch', () => {
    test('should return the url value', async () => {
        const url = await getImagen();
        expect( url.includes('https://') ).toBe( true );
    })
    
});