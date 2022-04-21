import React from 'react';
import {shallow} from 'enzyme';
import RecomendationX from './Recomendation';

it('Component reder fine', () => {
    const wrapper = shallow(<RecomendationX />);
    expect(wrapper.type()).toEqual('svg');
});
it('RecomendationX is 40x40', () => {
    const wrapper = shallow(<RecomendationX />);
    expect(wrapper.prop('width')).toEqual('40');
    expect(wrapper.prop('height')).toEqual('40');
});
