import React from 'react';
import {shallow} from 'enzyme';
import SwitchOff from './SwitchOff';

it('SwitchOff is an svg', () => {
    const wrapper = shallow(<SwitchOff />);
    expect(wrapper.type()).toEqual('svg');
});

it('SwitchOff is 26x24', () => {
    const wrapper = shallow(<SwitchOff />);
    expect(wrapper.prop('width')).toEqual('40');
    expect(wrapper.prop('height')).toEqual('24');
});
