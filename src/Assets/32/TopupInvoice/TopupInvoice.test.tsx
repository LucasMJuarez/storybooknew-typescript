import React from 'react';
import {shallow} from 'enzyme';
import TopupInvoice from './TopupInvoice';

it('TopupInvoice is an svg', () => {
    const wrapper = shallow(<TopupInvoice />);
    expect(wrapper.type()).toEqual('svg');
});

it('TopupInvoice is 32x32', () => {
    const wrapper = shallow(<TopupInvoice />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
