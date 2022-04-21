import React from 'react';
import {shallow} from 'enzyme';
import SendBalance from './SendBalance';

it('SendBalance is an svg', () => {
    const wrapper = shallow(<SendBalance />);
    expect(wrapper.type()).toEqual('svg');
});
