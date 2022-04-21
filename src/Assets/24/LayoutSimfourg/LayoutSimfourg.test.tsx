import React from 'react';
import {shallow} from 'enzyme';
import LayoutSimfourg from './LayoutSimfourg';

it('is an svg', () => {
    const wrapper = shallow(<LayoutSimfourg />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<LayoutSimfourg />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
