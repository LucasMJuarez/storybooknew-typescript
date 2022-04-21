import React from 'react';
import {shallow} from 'enzyme';
import SendBalanceMagenta from './SendBalanceMagenta';

it('SendBalanceMagenta is an svg', () => {
    const wrapper = shallow(<SendBalanceMagenta />);
    expect(wrapper.type()).toEqual('svg');
});

it('SendBalanceMagenta is 32x32', () => {
    const wrapper = shallow(<SendBalanceMagenta />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
