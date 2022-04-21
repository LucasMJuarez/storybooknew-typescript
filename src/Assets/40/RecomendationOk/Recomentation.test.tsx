import React from 'react';
import {shallow} from 'enzyme';
import RecomendationOk from './Recomendation';

it('Component reder fine', () => {
    const wrapper = shallow(<RecomendationOk />);
    expect(wrapper.type()).toEqual('svg');
});
it('RecomendationOk is 40x40', () => {
    const wrapper = shallow(<RecomendationOk />);
    expect(wrapper.prop('width')).toEqual('40');
    expect(wrapper.prop('height')).toEqual('40');
});
