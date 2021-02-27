import React from 'react'
import { render } from '@testing-library/react';
import { PrimeraApp } from '../PrimeraApp';

describe('Test PrimeraApp component', () => {
    test('should show message "Hola mundo"', () => {
        const greeting = "Hola mundo"; 

        const { getByText } = render(<PrimeraApp saludo={greeting} subtitulo="Test" />);

        expect(getByText(greeting)).toBeInTheDocument(); 
    }); 

});