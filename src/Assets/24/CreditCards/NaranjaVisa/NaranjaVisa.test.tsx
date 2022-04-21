import React from 'react';
import {shallow} from 'enzyme';
import NaranjaVisa from './NaranjaVisa';

it('is an svg', () => {
    const wrapper = shallow(<NaranjaVisa />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<NaranjaVisa />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});