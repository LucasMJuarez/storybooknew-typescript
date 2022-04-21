import React from 'react';
import {shallow} from 'enzyme';
import SupportAgent_Circle from './SupportAgent_Circle';

it('SupportAgent_Circle is an svg', () => {
    const wrapper = shallow(<SupportAgent_Circle />);
    expect(wrapper.type()).toEqual('svg');
});
