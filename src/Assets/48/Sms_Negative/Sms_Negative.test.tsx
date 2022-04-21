import React from 'react';
import {shallow} from 'enzyme';
import Sms_Negative from './Sms_Negative';

it('Sms_Negative is an svg', () => {
    const wrapper = shallow(<Sms_Negative />);
    expect(wrapper.type()).toEqual('svg');
});