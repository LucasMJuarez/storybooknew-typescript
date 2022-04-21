import React from 'react';
import {shallow} from 'enzyme';
import Call from './Call';

it('is an svg', () => {
    const wrapper = shallow(<Call />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Call />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});