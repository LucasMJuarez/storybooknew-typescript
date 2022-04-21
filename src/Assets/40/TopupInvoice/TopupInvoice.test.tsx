import React from 'react';
import {shallow} from 'enzyme';
import TopupInvoice from './TopupInvoice';

it('TopupInvoice is an svg', () => {
    const wrapper = shallow(<TopupInvoice />);
    expect(wrapper.type()).toEqual('svg');
});
