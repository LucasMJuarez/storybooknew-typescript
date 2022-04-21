import React from 'react';
import {shallow} from 'enzyme';
import TopupBalanceSos from './TopupBalanceSos';

it('TopupBalanceSos is an svg', () => {
    const wrapper = shallow(<TopupBalanceSos />);
    expect(wrapper.type()).toEqual('svg');
});

it('TopupBalanceSos is 32x32', () => {
    const wrapper = shallow(<TopupBalanceSos />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
