import React from 'react';
import {shallow} from 'enzyme';
import MovistarPlay from './MovistarPlay';

it('MovistarPlay is an svg', () => {
    const wrapper = shallow(<MovistarPlay />);
    expect(wrapper.type()).toEqual('svg');
});

it('MovistarPlay is 32x32', () => {
    const wrapper = shallow(<MovistarPlay />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
