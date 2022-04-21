import React from 'react';
import { shallow } from 'enzyme';
import Check from './Check';

it('is an svg', () => {
    const wrapper = shallow(<Check />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 16x16', () => {
    const wrapper = shallow(<Check />);
    expect(wrapper.prop('width')).toEqual('16');
    expect(wrapper.prop('height')).toEqual('16');
});