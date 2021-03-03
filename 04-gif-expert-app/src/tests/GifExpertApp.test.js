import React from 'react'
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';
import '@testing-library/jest-dom';

describe('Test for GifExpertApp', () => {
    test('should  display component correctly', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should display a categories list', () => {
        const categories = ['Rick and Morty', 'Dragon Ball']; 
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )
    });
});