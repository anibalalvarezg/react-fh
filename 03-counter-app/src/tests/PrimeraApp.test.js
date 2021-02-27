import React from 'react'
import '@testing-library/jest-dom';
import { PrimeraApp } from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Test PrimeraApp component', () => {
    // test('should show message "Hola mundo"', () => {
    //     const greeting = "Hola mundo"; 

    //     const { getByText } = render(<PrimeraApp saludo={greeting} subtitulo="Test" />);

    //     expect(getByText(greeting)).toBeInTheDocument(); 
    // }); 

    test('should show PrimeraApp correctly', () => {
        const greeting = 'Hola mundo';
        const wrapper = shallow( <PrimeraApp saludo={greeting} subtitulo="Esto es una prueba" />);

        expect( wrapper ).toMatchSnapshot()
    }); 

    test('should show the subtitle sends by props', () => {
        const greeting = 'Hola mundo'; 
        const wrapper = shallow(
            <PrimeraApp 
                saludo={greeting} 
                subtitulo="Soy un subtítulo"
            />
        );

        const textParagraph = wrapper.find('p').text();
        expect(textParagraph).toBe("Soy un subtítulo"); 
    });
    
    
});