import React from 'react'
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';
describe('Tests GifGridItem', () => {

    const title = 'A title'; 
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
    test('should shows component correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should hava a paragrah with a title', () => {
        const p = wrapper.find('p'); 
        expect( p.text().trim() ).toBe( title );
    });
    
    test('should has a image equal to the url and the alt from prop', () => {
        const img = wrapper.find('img');
        console.log(img.props());
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    }); 

    test('should has animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__fadeIn') ).not.toBe( false );
    });
    
    
});