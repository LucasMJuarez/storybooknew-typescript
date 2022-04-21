import React from 'react';
import {shallow} from 'enzyme';
import MovistarBackgroundBig from './MovistarBackgroundBig';

it('MovistarBackgroundBig is an svg', () => {
    const wrapper = shallow(<MovistarBackgroundBig />);
    expect(wrapper.type()).toEqual('svg');
});

it('MovistarBackgroundBig is 24x24', () => {
    const wrapper = shallow(<MovistarBackgroundBig />);
    expect(wrapper.prop('width')).toEqual('360px');
    expect(wrapper.prop('height')).toEqual('120px');
});
