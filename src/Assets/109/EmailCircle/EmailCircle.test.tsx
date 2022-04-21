import React from 'react';
import {shallow} from 'enzyme';
import EmailCircle from './EmailCircle';

it('EmailCircle is an svg', () => {
    const wrapper = shallow(<EmailCircle />);
    expect(wrapper.type()).toEqual('svg');
});

it('EmailCircle is 109x109', () => {
    const wrapper = shallow(<EmailCircle />);
    expect(wrapper.prop('width')).toEqual('109');
    expect(wrapper.prop('height')).toEqual('109');
});
