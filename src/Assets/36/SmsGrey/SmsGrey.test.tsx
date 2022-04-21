import React from 'react';
import {shallow} from 'enzyme';
import SmsGrey from './SmsGrey';

it('Sms is an svg', () => {
    const wrapper = shallow(<SmsGrey />);
    expect(wrapper.type()).toEqual('svg');
});
