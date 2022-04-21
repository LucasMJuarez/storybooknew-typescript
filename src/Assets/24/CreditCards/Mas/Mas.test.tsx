import React from 'react';
import {shallow} from 'enzyme';
import Mas from './Mas';

it('is an svg', () => {
    const wrapper = shallow(<Mas />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Mas />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});