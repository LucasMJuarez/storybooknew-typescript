import React from 'react';
import {shallow} from 'enzyme';
import Cl from './Cl';

it('is an svg', () => {
    const wrapper = shallow(<Cl />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Cl />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
