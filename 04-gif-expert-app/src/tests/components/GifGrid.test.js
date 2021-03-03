import '@testing-library/jest-dom';
import { shallow } from 'enzyme'; 
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
describe('Test GifGrid component', () => {
    
    const category = 'Rick and Morty';
    test('should display component correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid  category={category} />); 
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('shold display item when download images', () => {

        const gifs = [{
            id: 'ABC', 
            url: 'https://localhost/asd',
            title: 'anything'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid  category={category} />); 
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false ); 
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
    
});
