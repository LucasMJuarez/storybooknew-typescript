import React from 'react';
import {shallow} from 'enzyme';
import SmsCircle from './SmsCircle';

it('SmsCircle is an svg', () => {
    const wrapper = shallow(<SmsCircle />);
    expect(wrapper.type()).toEqual('svg');
});
