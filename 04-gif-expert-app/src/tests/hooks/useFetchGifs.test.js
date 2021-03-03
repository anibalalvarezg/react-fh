import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'
describe('Test useFetchGifs', () => {
    test('should return initial state', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Rick and Morty'));
        const { data, loading } = result.current;

        await waitForNextUpdate(); 

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('shold return an image array and loading in false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Rick and Morty'));

        await waitForNextUpdate(); 
        
        const { data, loading } = result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    
    
});
