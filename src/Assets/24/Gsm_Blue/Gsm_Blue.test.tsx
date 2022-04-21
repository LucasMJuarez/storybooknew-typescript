import React from 'react';
import {shallow} from 'enzyme';
import Gsm_Blue from './Gsm_Blue';

it('is an svg', () => {
    const wrapper = shallow(<Gsm_Blue />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Gsm_Blue />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});