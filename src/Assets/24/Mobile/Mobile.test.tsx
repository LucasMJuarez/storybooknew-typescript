import React from 'react';
import { shallow } from 'enzyme';
import Mobile from './Mobile';

it('is an svg', () => {
    const wrapper = shallow(<Mobile />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 25x24', () => {
    const wrapper = shallow(<Mobile />);
    expect(wrapper.prop('width')).toEqual('25');
    expect(wrapper.prop('height')).toEqual('24');
});