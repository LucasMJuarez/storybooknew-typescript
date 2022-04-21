import React from 'react';
import {shallow} from 'enzyme';
import Sucredito from './Sucredito';

it('is an svg', () => {
    const wrapper = shallow(<Sucredito />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Sucredito />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});