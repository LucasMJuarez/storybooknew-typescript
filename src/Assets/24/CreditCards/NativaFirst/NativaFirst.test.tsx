import React from 'react';
import {shallow} from 'enzyme';
import NativaFirst from './NativaFirst';

it('is an svg', () => {
    const wrapper = shallow(<NativaFirst />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<NativaFirst />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});