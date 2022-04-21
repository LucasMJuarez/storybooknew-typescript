import React from 'react';
import {shallow} from 'enzyme';
import Nevada from './Nevada';

it('is an svg', () => {
    const wrapper = shallow(<Nevada />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Nevada />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});