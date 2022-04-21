import React from 'react';
import {shallow} from 'enzyme';
import AllProducts from './AllProducts';

it('AllProducts is an svg', () => {
    const wrapper = shallow(<AllProducts />);
    expect(wrapper.type()).toEqual('svg');
});

it('AllProducts is 32x32', () => {
    const wrapper = shallow(<AllProducts />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
