import React from 'react';
import {shallow} from 'enzyme';
import WithoutRecomendations from './WithoutRecomendations';

it('WithoutRecomendations is an svg', () => {
    const wrapper = shallow(<WithoutRecomendations />);
    expect(wrapper.type()).toEqual('svg');
});
