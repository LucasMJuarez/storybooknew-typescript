import React from 'react';
import {shallow} from 'enzyme';
import Smartphone from './Smartphone';

it('Smartphone is an svg', () => {
    const wrapper = shallow(<Smartphone />);
    expect(wrapper.type()).toEqual('svg');
});

it('Smartphone is 40x40', () => {
    const wrapper = shallow(<Smartphone />);
    expect(wrapper.prop('width')).toEqual('40');
    expect(wrapper.prop('height')).toEqual('40');
});
