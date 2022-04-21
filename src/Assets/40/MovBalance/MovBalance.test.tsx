import React from 'react';
import {shallow} from 'enzyme';
import MovBalance from './MovBalance';

it('MovBalance is an svg', () => {
    const wrapper = shallow(<MovBalance />);
    expect(wrapper.type()).toEqual('svg');
});
