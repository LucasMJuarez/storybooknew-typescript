import React from 'react';
import {shallow} from 'enzyme';
import Naranja from './Naranja';

it('is an svg', () => {
    const wrapper = shallow(<Naranja />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Naranja />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});