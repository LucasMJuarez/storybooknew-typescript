import React from 'react';
import {shallow} from 'enzyme';
import EmptyBills from './EmptyBills';

it('EmptyBills is an svg', () => {
    const wrapper = shallow(<EmptyBills />);
    expect(wrapper.type()).toEqual('svg');
});
