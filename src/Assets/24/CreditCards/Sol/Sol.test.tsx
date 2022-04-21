import React from 'react';
import {shallow} from 'enzyme';
import Sol from './Sol';

it('is an svg', () => {
    const wrapper = shallow(<Sol />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Sol />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});