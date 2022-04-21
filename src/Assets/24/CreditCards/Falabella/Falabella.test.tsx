import React from 'react';
import {shallow} from 'enzyme';
import Falabella from './Falabella';

it('is an svg', () => {
    const wrapper = shallow(<Falabella />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Falabella />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});