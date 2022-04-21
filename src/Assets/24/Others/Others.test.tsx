import React from 'react';
import {shallow} from 'enzyme';
import Others from './Others';

it('is an svg', () => {
    const wrapper = shallow(<Others />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Others />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
