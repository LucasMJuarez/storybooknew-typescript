import React from 'react';
import {shallow} from 'enzyme';
import Diners from './Diners';

it('is an svg', () => {
    const wrapper = shallow(<Diners />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Diners />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});