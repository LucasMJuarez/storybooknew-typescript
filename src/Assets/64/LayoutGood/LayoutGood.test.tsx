import React from 'react';
import {shallow} from 'enzyme';
import LayoutGood from './LayoutGood';

it('LayoutGood is an svg', () => {
    const wrapper = shallow(<LayoutGood />);
    expect(wrapper.type()).toEqual('svg');
});

it('LayoutGood is 64x64', () => {
    const wrapper = shallow(<LayoutGood />);
    expect(wrapper.prop('width')).toEqual('64');
    expect(wrapper.prop('height')).toEqual('64');
});
