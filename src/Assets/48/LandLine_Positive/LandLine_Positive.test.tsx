import React from 'react';
import {shallow} from 'enzyme';
import LandLine_Positive from './LandLine_Positive';

it('LandLine_Positive is an svg', () => {
    const wrapper = shallow(<LandLine_Positive />);
    expect(wrapper.type()).toEqual('svg');
});