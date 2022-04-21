import React from 'react';
import {shallow} from 'enzyme';
import Family from './Family';

it('is an svg', () => {
    const wrapper = shallow(<Family />);
    expect(wrapper.type()).toEqual('svg');
});

it('Family is 32x32', () => {
    const wrapper = shallow(<Family />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
