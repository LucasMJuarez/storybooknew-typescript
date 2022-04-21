import React from 'react';
import {shallow} from 'enzyme';
import Talk from './Talk';

it('Talk is an svg', () => {
    const wrapper = shallow(<Talk />);
    expect(wrapper.type()).toEqual('svg');
});

it('Talk is 32x32', () => {
    const wrapper = shallow(<Talk />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
