import React from 'react';
import {shallow} from 'enzyme';
import VisaDebit from './VisaDebit';

it('is an svg', () => {
    const wrapper = shallow(<VisaDebit />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<VisaDebit />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});