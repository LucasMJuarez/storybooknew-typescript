import React from 'react';
import {shallow} from 'enzyme';
import RecomendationChip from './RecomendationChip';

it('is an svg', () => {
    const wrapper = shallow(<RecomendationChip />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 16x16', () => {
    const wrapper = shallow(<RecomendationChip />);
    expect(wrapper.prop('width')).toEqual('16');
    expect(wrapper.prop('height')).toEqual('16');
});