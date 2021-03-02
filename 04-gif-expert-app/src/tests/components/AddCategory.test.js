import { AddCategory } from "../../components/AddCategory";
import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';
describe('Tests in AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } />);
    });

    test('should display the component correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should change the text box', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change', { target: { value } });
        expect( wrapper.find('p').text() ).toBe( value );
    });

    test('should not send the information from the form', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('shuld call setCategories and clean the text box', () => {
        const value = 'Hola Mundo'; 

        wrapper.find('input').simulate('change', { target: { value }});

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        // expect( setCategories ).toHaveBeenCalledTimes(2);
        // expect( setCategories ).toHaveBeenCalledWith(expect.any(functions));

        expect( wrapper.find('input').prop('value') ).toBe('');
    });

});
