import React from 'react';
import { shallow } from 'enzyme';
import Explore_Active from './Explore_Active';

it('is an svg', () => {
    const wrapper = shallow(<Explore_Active />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Explore_Active />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});