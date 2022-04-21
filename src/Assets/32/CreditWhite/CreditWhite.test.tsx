import React from 'react';
import {shallow} from 'enzyme';
import CreditWhite from './CreditWhite';

it('CreditWhite is an svg', () => {
    const wrapper = shallow(<CreditWhite />);
    expect(wrapper.type()).toEqual('svg');
});

it('CreditWhite is 32x32', () => {
    const wrapper = shallow(<CreditWhite />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
