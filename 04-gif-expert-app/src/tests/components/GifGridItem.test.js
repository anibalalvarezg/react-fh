import React from 'react'
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';
describe('Tests GifGridItem', () => {
    test('should shows component correctly', () => {
        const wrapper = shallow(<GifGridItem />);
        expect( wrapper ).toMatchSnapshot();
    });
    
});