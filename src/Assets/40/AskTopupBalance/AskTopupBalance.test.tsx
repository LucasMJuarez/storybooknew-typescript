import React from 'react';
import {shallow} from 'enzyme';
import AskTopupBalance from './AskTopupBalance';

it('AskTopupBalance is an svg', () => {
    const wrapper = shallow(<AskTopupBalance />);
    expect(wrapper.type()).toEqual('svg');
});
