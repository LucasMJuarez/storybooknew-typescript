import React from 'react';
import {shallow} from 'enzyme';
import FatGrey from './FatGrey';
import styles from './FatGrey.styles';

it('is truthy', () => {
    expect(FatGrey).toBeTruthy();
});
it('Dont throw', () => {
    expect(() => shallow(<FatGrey />)).not.toThrow();
});
it('Have class', () => {
    const wrapper = shallow(<FatGrey />);
    expect(wrapper.prop('className')).toEqual(styles.FatGrey);
});
