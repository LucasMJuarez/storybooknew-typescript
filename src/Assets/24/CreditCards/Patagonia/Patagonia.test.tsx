import React from 'react';
import {shallow} from 'enzyme';
import Patagonia from './Patagonia';

it('is an svg', () => {
    const wrapper = shallow(<Patagonia />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Patagonia />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});