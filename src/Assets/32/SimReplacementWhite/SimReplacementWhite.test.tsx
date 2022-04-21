import React from 'react';
import {shallow} from 'enzyme';
import SimReplacementWhite from './SimReplacementWhite';

it('SimReplacementWhite is an svg', () => {
    const wrapper = shallow(<SimReplacementWhite />);
    expect(wrapper.type()).toEqual('svg');
});

it('SimReplacementWhite is 32x32', () => {
    const wrapper = shallow(<SimReplacementWhite />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
