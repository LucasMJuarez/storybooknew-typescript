import React from 'react';
import {shallow} from 'enzyme';
import Landline from './Landline';

it('Landline is an svg', () => {
    const wrapper = shallow(<Landline />);
    expect(wrapper.type()).toEqual('svg');
});

it('Landline is 32x32', () => {
    const wrapper = shallow(<Landline />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
