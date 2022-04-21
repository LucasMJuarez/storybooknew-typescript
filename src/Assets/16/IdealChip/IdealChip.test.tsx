import React from 'react';
import {shallow} from 'enzyme';
import IdealChip from './IdealChip';

it('is an svg', () => {
    const wrapper = shallow(<IdealChip />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 16x16', () => {
    const wrapper = shallow(<IdealChip />);
    expect(wrapper.prop('width')).toEqual('16');
    expect(wrapper.prop('height')).toEqual('16');
});