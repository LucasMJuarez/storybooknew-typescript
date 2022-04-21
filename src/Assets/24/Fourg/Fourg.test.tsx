import React from 'react';
import {shallow} from 'enzyme';
import Fourg from './Fourg';

it('is an svg', () => {
    const wrapper = shallow(<Fourg />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Fourg />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});