import React from 'react';
import {shallow} from 'enzyme';
import Camera_Circle from './Camera_Circle';

it('Camera_Circle is an svg', () => {
    const wrapper = shallow(<Camera_Circle />);
    expect(wrapper.type()).toEqual('svg');
});

it('Camera_Circle is 64x64', () => {
    const wrapper = shallow(<Camera_Circle />);
    expect(wrapper.prop('width')).toEqual('64');
    expect(wrapper.prop('height')).toEqual('64');
});
