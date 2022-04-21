import React from 'react';
import {shallow} from 'enzyme';
import Left from './Left';
import styles from './Left.styles';

const mockFn = jest.fn();
const { arrowBackground } = styles

describe('Testing component <Left />', () => {

    it('Left renders ok', () => {
        expect(() => shallow(<Left  onClick={mockFn} />)).not.toThrow();
    });

    it('Check if Left is an svg', () => {
        const wrapper = shallow(<Left onClick={mockFn} />);
        expect(wrapper.type()).toEqual('svg');
    });

    it('Check if Left is 32x32', () => {
        const wrapper = shallow(<Left onClick={mockFn} />);
        expect(wrapper.prop('width')).toEqual('32');
        expect(wrapper.prop('height')).toEqual('32');
    });

    it('Check active background props', () => {
        const wrapper = shallow(<Left background onClick={mockFn} />);
        expect(wrapper.hasClass(arrowBackground)).toBeTruthy();
    });

    it('Check disable background props', () => {
        const wrapper = shallow(<Left onClick={mockFn} />);
        expect(wrapper.hasClass('')).toBeTruthy();
    });

    it('Check onClick props', () => {
        const wrapper = shallow(<Left onClick={mockFn} />);
        expect(wrapper.simulate('click')).toBeTruthy();
    });
});
