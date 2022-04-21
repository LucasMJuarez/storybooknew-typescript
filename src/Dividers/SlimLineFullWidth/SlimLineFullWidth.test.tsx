import React from 'react';
import {shallow} from 'enzyme';
import SlimLineFullWidth from './SlimLineFullWidth';
import styles from './SlimLineFullWidth.styles';

it('is truthy', () => {
    expect(SlimLineFullWidth).toBeTruthy();
});
it('Dont throw', () => {
    expect(() => shallow(<SlimLineFullWidth />)).not.toThrow();
});
it('Have class', () => {
    const wrapper = shallow(<SlimLineFullWidth />);
    expect(wrapper.prop('className')).toEqual(styles.SlimLineFullWidth);
});
