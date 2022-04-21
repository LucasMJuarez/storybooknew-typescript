import React from 'react';
import {shallow} from 'enzyme';
import Totalization from './Totalization';

it('Totalization is an svg', () => {
    const wrapper = shallow(<Totalization />);
    expect(wrapper.type()).toEqual('svg');
});

it('Totalization is 32x32', () => {
    const wrapper = shallow(<Totalization />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
