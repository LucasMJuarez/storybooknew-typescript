import React from 'react';
import {shallow} from 'enzyme';
import Mira from './Mira';

it('is an svg', () => {
    const wrapper = shallow(<Mira />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Mira />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});