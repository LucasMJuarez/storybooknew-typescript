import React from 'react';
import {shallow} from 'enzyme';
import Automatica from './Automatica';

it('is an svg', () => {
    const wrapper = shallow(<Automatica />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Automatica />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});