import React from 'react';
import {shallow} from 'enzyme';
import Right from './Right';
import styles from './Right.styles';

const mockFn = jest.fn();
const { arrowBackground } = styles

describe('Testing component <Right />', () => {

    it('Right renders ok', () => {
        expect(() => shallow(<Right  onClick={mockFn} />)).not.toThrow();
    });

    it('Check if Right is an svg', () => {
        const wrapper = shallow(<Right onClick={mockFn} />);
        expect(wrapper.type()).toEqual('svg');
    });

    it('Check if Right is 32x32', () => {
        const wrapper = shallow(<Right onClick={mockFn} />);
        expect(wrapper.prop('width')).toEqual('32');
        expect(wrapper.prop('height')).toEqual('32');
    });

    it('Check active background props', () => {
        const wrapper = shallow(<Right background onClick={mockFn} />);
        expect(wrapper.hasClass(arrowBackground)).toBeTruthy();
    });

    it('Check disable background props', () => {
        const wrapper = shallow(<Right onClick={mockFn} />);
        expect(wrapper.hasClass('')).toBeTruthy();
    });

    it('Check onClick props', () => {
        const wrapper = shallow(<Right onClick={mockFn} />);
        expect(wrapper.simulate('click')).toBeTruthy();
    });
});