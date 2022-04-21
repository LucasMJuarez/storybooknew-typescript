import React from 'react';
import {shallow} from 'enzyme';
import PaymentPlaces from './PaymentPlaces';

it('PaymentPlaces is an svg', () => {
    const wrapper = shallow(<PaymentPlaces />);
    expect(wrapper.type()).toEqual('svg');
});

it('PaymentPlaces is 32x32', () => {
    const wrapper = shallow(<PaymentPlaces />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
