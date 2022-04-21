import React from 'react';
import {shallow} from 'enzyme';
import Pe from './Pe';

it('is an svg', () => {
    const wrapper = shallow(<Pe />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Pe />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
