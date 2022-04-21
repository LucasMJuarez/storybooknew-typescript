import React from 'react';
import {shallow} from 'enzyme';
import SwitchOn from './SwitchOn';

it('SwitchOn is an svg', () => {
    const wrapper = shallow(<SwitchOn />);
    expect(wrapper.type()).toEqual('svg');
});

it('SwitchOn is 26x24', () => {
    const wrapper = shallow(<SwitchOn />);
    expect(wrapper.prop('width')).toEqual('40');
    expect(wrapper.prop('height')).toEqual('24');
});
