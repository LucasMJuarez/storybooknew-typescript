import React from 'react';
import {shallow} from 'enzyme';
import Cr from './Cr';

it('is an svg', () => {
    const wrapper = shallow(<Cr />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Cr />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
