import React from 'react';
import {shallow} from 'enzyme';
import SmsCircle from './SmsCircle';

it('SmsCircle is an svg', () => {
    const wrapper = shallow(<SmsCircle />);
    expect(wrapper.type()).toEqual('svg');
});

it('SmsCircle is 24x24', () => {
    const wrapper = shallow(<SmsCircle />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});