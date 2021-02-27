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
    })
    
});