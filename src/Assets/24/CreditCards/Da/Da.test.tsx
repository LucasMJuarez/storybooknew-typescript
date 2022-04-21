import React from 'react';
import {shallow} from 'enzyme';
import Da from './Da';

it('is an svg', () => {
    const wrapper = shallow(<Da />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Da />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});