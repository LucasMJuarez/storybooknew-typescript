import React from 'react';
import {shallow} from 'enzyme';
import TopBottom8 from './TopBottom8';
import styles from './TopBottom8.styles';

it('is truthy', () => {
    expect(TopBottom8).toBeTruthy();
});
it('Dont throw', () => {
    expect(() => shallow(<TopBottom8 />)).not.toThrow();
});
it('Have class', () => {
    const wrapper = shallow(<TopBottom8 />);
    expect(wrapper.prop('className')).toEqual(styles.rectangle);
});