import React from 'react';
import {shallow} from 'enzyme';
import SendBalanceMagenta from './SendBalanceMagenta';

it('SendBalanceMagenta is an svg', () => {
    const wrapper = shallow(<SendBalanceMagenta />);
    expect(wrapper.type()).toEqual('svg');
});
