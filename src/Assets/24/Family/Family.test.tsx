import React from 'react';
import {shallow} from 'enzyme';
import Family from './Family';

it('Family is an svg', () => {
    const wrapper = shallow(<Family />);
    expect(wrapper.type()).toEqual('svg');
});

it('Family is 24x24', () => {
    const wrapper = shallow(<Family />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
