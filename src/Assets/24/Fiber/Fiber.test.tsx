import React from 'react';
import {shallow} from 'enzyme';
import Fiber from './Fiber';

it('Fiber is an svg', () => {
    const wrapper = shallow(<Fiber />);
    expect(wrapper.type()).toEqual('svg');
});

it('Fiber is 24x24', () => {
    const wrapper = shallow(<Fiber />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});