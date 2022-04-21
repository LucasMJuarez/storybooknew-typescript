import React from 'react';
import {shallow} from 'enzyme';
import Warranty from './Warranty';

it('Warranty is an svg', () => {
    const wrapper = shallow(<Warranty />);
    expect(wrapper.type()).toEqual('svg');
});

it('Warranty is 32x32', () => {
    const wrapper = shallow(<Warranty />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
