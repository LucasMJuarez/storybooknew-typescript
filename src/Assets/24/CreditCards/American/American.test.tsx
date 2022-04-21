import React from 'react';
import {shallow} from 'enzyme';
import American from './American';

it('is an svg', () => {
    const wrapper = shallow(<American />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<American />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});