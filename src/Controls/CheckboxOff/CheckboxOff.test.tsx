import React from 'react';
import {shallow} from 'enzyme';
import CheckboxOff from './CheckboxOff';

it('CheckboxOff is an svg', () => {
    const wrapper = shallow(<CheckboxOff />);
    expect(wrapper.type()).toEqual('svg');
});

it('CheckboxOff is 26x24', () => {
    const wrapper = shallow(<CheckboxOff />);
    expect(wrapper.prop('width')).toEqual('26');
    expect(wrapper.prop('height')).toEqual('24');
});
