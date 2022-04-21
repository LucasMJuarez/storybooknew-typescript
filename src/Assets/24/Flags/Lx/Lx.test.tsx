import React from 'react';
import {shallow} from 'enzyme';
import Lx from './Lx';

it('is an svg', () => {
    const wrapper = shallow(<Lx />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Lx />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
