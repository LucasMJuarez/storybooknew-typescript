import React from 'react';
import { shallow } from 'enzyme';
import Explore from './Explore';

it('is an svg', () => {
    const wrapper = shallow(<Explore />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Explore />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});