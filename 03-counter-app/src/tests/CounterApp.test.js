import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Tests CounterApp component', () => {
    let wrapper = shallow(<CounterApp value={100} />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp value={100} />);
    });
    test('should show CounterApp correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should show value by default 100', () => {
        const counterText = wrapper.find('p').text().trim();

        expect(counterText).toBe('100');
    });

    test('should increment with the button plus one', () => {
        const buttonAdd = wrapper.find('button').at(0).simulate('click', {});
        const counterText = wrapper.find('p').text().trim();

        expect(counterText).toBe('101');
    });

    test('should increment with the button subtract one', () => {
        const buttonSubtract = wrapper.find('button').at(2).simulate('click', {});
        const counterText = wrapper.find('p').text().trim();

        expect(counterText).toBe('100');
    });

    test('should click reset button and set default value', () => {
        const wrapper = shallow(<CounterApp value={100} />);

        wrapper.find('button').at(0).simulate('click', {});
        wrapper.find('button').at(0).simulate('click', {});
        wrapper.find('button').at(0).simulate('click', {});

        wrapper.find('button').at(1).simulate('click', {});

        const counterText = wrapper.find('p').text().trim();
        console.log(counterText);

        expect(counterText).toBe('102');

    })


});