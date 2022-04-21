import React from 'react';
import {shallow} from 'enzyme';
import SendBalance from './SendBalance';

it('SendBalance is an svg', () => {
    const wrapper = shallow(<SendBalance />);
    expect(wrapper.type()).toEqual('svg');
});

it('SendBalance is 32x32', () => {
    const wrapper = shallow(<SendBalance />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
