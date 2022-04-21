import React from 'react';
import {shallow} from 'enzyme';
import Amex from './Amex';

it('is an svg', () => {
    const wrapper = shallow(<Amex />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Amex />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});