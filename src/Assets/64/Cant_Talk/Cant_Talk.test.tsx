import React from 'react';
import { shallow } from 'enzyme';
import Cant_Talk from './Cant_Talk';

it('Cant_Talk is an svg', () => {
    const wrapper = shallow(<Cant_Talk />);
    expect(wrapper.type()).toEqual('svg');
});

it('Cant_Talk is 64x64', () => {
    const wrapper = shallow(<Cant_Talk />);
    expect(wrapper.prop('width')).toEqual('64');
    expect(wrapper.prop('height')).toEqual('64');
});