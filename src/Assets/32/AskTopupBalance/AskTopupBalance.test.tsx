import React from 'react';
import {shallow} from 'enzyme';
import AskTopupBalance from './AskTopupBalance';

it('AskTopupBalance is an svg', () => {
    const wrapper = shallow(<AskTopupBalance />);
    expect(wrapper.type()).toEqual('svg');
});

it('AskTopupBalance is 32x32', () => {
    const wrapper = shallow(<AskTopupBalance />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
