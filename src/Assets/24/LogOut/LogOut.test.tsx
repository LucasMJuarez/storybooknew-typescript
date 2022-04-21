import React from 'react';
import {shallow} from 'enzyme';
import LogOut from './LogOut';

it('is an svg', () => {
    const wrapper = shallow(<LogOut />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<LogOut />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});