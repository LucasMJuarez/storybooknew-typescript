import React from 'react';
import {shallow} from 'enzyme';
import LandLine_Negative from './LandLine_Negative';

it('LandLine_Negative is an svg', () => {
    const wrapper = shallow(<LandLine_Negative />);
    expect(wrapper.type()).toEqual('svg');
});