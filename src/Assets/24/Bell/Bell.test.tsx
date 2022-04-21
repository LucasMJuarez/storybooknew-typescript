import React from 'react';
import {shallow} from 'enzyme';
import Bell from './Bell';

it('is an svg', () => {
    const wrapper = shallow(<Bell />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Bell />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});