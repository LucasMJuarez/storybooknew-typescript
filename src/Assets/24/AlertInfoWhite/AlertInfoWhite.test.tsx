import React from 'react';
import {shallow} from 'enzyme';
import AlertInfoWhite from './AlertInfoWhite';

it('AlertInfoWhite is an svg', () => {
    const wrapper = shallow(<AlertInfoWhite />);
    expect(wrapper.type()).toEqual('svg');
});

it('AlertInfoWhite is 24x24', () => {
    const wrapper = shallow(<AlertInfoWhite />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
