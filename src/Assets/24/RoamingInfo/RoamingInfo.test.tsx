import React from 'react';
import {shallow} from 'enzyme';
import RoamingInfo from './RoamingInfo';

it('RoamingInfo is an svg', () => {
    const wrapper = shallow(<RoamingInfo />);
    expect(wrapper.type()).toEqual('svg');
});

it('RoamingInfo is 24x24', () => {
    const wrapper = shallow(<RoamingInfo />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
