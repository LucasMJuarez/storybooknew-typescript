import React from 'react';
import {shallow} from 'enzyme';
import Credimas from './Credimas';

it('is an svg', () => {
    const wrapper = shallow(<Credimas />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Credimas />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});