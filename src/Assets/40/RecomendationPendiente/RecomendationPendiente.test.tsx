import React from 'react';
import {shallow} from 'enzyme';
import RecomendationPendiente from './RecomendationPendiente';

it('Component reder fine', () => {
    const wrapper = shallow(<RecomendationPendiente />);
    expect(wrapper.type()).toEqual('svg');
});
