import React from 'react';
import {shallow} from 'enzyme';
import Bottom16 from './Bottom16';
import styles from './Bottom16.styles';

it('is truthy', () => {
    expect(Bottom16).toBeTruthy();
});
it('Dont throw', () => {
    expect(() => shallow(<Bottom16 />)).not.toThrow();
});
it('Have class', () => {
    const wrapper = shallow(<Bottom16 />);
    expect(wrapper.prop('className')).toEqual(styles.rectangle);
});