import React from 'react';
import {shallow} from 'enzyme';
import SlimLineCentered from './SlimLineCentered';
import styles from './SlimLineCentered.styles';

it('is truthy', () => {
    expect(SlimLineCentered).toBeTruthy();
});
it('Dont throw', () => {
    expect(() => shallow(<SlimLineCentered />)).not.toThrow();
});
it('Have class', () => {
    const wrapper = shallow(<SlimLineCentered />);
    expect(wrapper.prop('className')).toEqual(styles.SlimLineCentered);
});
