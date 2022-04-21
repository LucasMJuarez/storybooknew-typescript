import React from 'react';
import { shallow } from 'enzyme';
import PlanPospago from './PlanPospago';

it('PlanPospago is an svg', () => {
    const wrapper = shallow(<PlanPospago />);
    expect(wrapper.type()).toEqual('svg');
});

it('PlanPospago is 142x173', () => {
    const wrapper = shallow(<PlanPospago />);
    expect(wrapper.prop('width')).toEqual('142');
    expect(wrapper.prop('height')).toEqual('173');
});
