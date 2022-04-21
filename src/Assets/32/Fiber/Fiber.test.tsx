import React from 'react';
import {shallow} from 'enzyme';
import Fiber from './Fiber';

it('is an svg', () => {
    const wrapper = shallow(<Fiber />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 32x32', () => {
    const wrapper = shallow(<Fiber />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});