import React from 'react';
import {shallow} from 'enzyme';
import ShoppingCard from './ShoppingCard';

it('is an svg', () => {
    const wrapper = shallow(<ShoppingCard />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<ShoppingCard />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});