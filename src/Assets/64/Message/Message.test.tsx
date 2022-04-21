import React from 'react';
import {shallow} from 'enzyme';
import Message from './Message';

it('Message is an svg', () => {
    const wrapper = shallow(<Message />);
    expect(wrapper.type()).toEqual('svg');
});

it('Message is 64x64', () => {
    const wrapper = shallow(<Message />);
    expect(wrapper.prop('width')).toEqual('64');
    expect(wrapper.prop('height')).toEqual('64');
});
