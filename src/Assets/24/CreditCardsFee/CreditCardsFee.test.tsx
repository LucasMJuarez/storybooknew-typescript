import React from 'react';
import {shallow} from 'enzyme';
import CreditCardsFee from './CreditCardsFee';

it('CreditCardsFee is an svg', () => {
    const wrapper = shallow(<CreditCardsFee />);
    expect(wrapper.type()).toEqual('svg');
});

it('CreditCardsFee is 24x24', () => {
    const wrapper = shallow(<CreditCardsFee />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
