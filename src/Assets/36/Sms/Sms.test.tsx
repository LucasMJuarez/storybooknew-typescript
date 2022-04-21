import React from 'react';
import {shallow} from 'enzyme';
import Sms from './Sms';

it('Sms is an svg', () => {
    const wrapper = shallow(<Sms />);
    expect(wrapper.type()).toEqual('svg');
});
