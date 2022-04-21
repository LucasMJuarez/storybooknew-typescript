import React from 'react';
import {shallow} from 'enzyme';
import Qida from './Qida';

it('is an svg', () => {
    const wrapper = shallow(<Qida />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Qida />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});