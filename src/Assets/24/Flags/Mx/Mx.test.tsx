import React from 'react';
import {shallow} from 'enzyme';
import Mx from './Mx';

it('is an svg', () => {
    const wrapper = shallow(<Mx />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Mx />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
