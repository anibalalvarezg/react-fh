import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Tests CounterApp component', () => {
    test('should show CounterApp correctly', () => {
        const wrapper = shallow(<CounterApp />); 
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should show value by default 100', () => {
        const wrapper = shallow( <CounterApp value={100}/>);
        const counterText = wrapper.find('p').text().trim();

        expect(counterText).toBe('100'); 
    });
    
});