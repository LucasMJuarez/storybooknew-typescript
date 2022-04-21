import React from 'react';
import {shallow} from 'enzyme';
import Sms_Positive from './Sms_Positive';

it('Sms_Positive is an svg', () => {
    const wrapper = shallow(<Sms_Positive />);
    expect(wrapper.type()).toEqual('svg');
});