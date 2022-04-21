import React from 'react';
import {shallow} from 'enzyme';
import MovistarTv from './MovistarTv';

it('MovistarTv is an svg', () => {
    const wrapper = shallow(<MovistarTv />);
    expect(wrapper.type()).toEqual('svg');
});

it('MovistarTv is 24x24', () => {
    const wrapper = shallow(<MovistarTv />);
    expect(wrapper.prop('width')).toEqual('24px');
    expect(wrapper.prop('height')).toEqual('24px');
});
