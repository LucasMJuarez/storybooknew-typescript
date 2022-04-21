import React from 'react';
import {shallow} from 'enzyme';
import Ny from './Ny';

it('is an svg', () => {
    const wrapper = shallow(<Ny />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Ny />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
