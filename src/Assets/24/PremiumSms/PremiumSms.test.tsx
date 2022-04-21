import React from 'react';
import {shallow} from 'enzyme';
import PremiumSms from './PremiumSms';

it('PremiumSms is an svg', () => {
    const wrapper = shallow(<PremiumSms />);
    expect(wrapper.type()).toEqual('svg');
});

it('PremiumSms is 24x24', () => {
    const wrapper = shallow(<PremiumSms />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
