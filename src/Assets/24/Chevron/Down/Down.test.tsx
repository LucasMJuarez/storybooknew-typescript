import React from 'react';
import {shallow} from 'enzyme';
import Down from './Down';

it('Right is an svg', () => {
    const wrapper = shallow(<Down />);
    expect(wrapper.type()).toEqual('svg');
});

it('Right is 24x24', () => {
    const wrapper = shallow(<Down />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
