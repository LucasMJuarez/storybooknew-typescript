import React from 'react';
import {shallow} from 'enzyme';
import Mobile from './Mobile';

it('Mobile is an svg', () => {
    const wrapper = shallow(<Mobile />);
    expect(wrapper.type()).toEqual('svg');
});

it('Mobile is 32x32', () => {
    const wrapper = shallow(<Mobile />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
