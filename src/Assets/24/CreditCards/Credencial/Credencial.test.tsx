import React from 'react';
import {shallow} from 'enzyme';
import Credencial from './Credencial';

it('is an svg', () => {
    const wrapper = shallow(<Credencial />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Credencial />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});