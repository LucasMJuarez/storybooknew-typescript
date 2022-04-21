import React from 'react';
import {shallow} from 'enzyme';
import Profile from './Profile';

it('is an svg', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});