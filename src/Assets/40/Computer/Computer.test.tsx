import React from 'react';
import {shallow} from 'enzyme';
import Computer from './Computer';

it('Computer is an svg', () => {
    const wrapper = shallow(<Computer />);
    expect(wrapper.type()).toEqual('svg');
});

it('Computer is 40x40', () => {
    const wrapper = shallow(<Computer />);
    expect(wrapper.prop('width')).toEqual('40');
    expect(wrapper.prop('height')).toEqual('40');
});
