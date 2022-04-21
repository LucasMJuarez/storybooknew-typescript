import React from 'react';
import {shallow} from 'enzyme';
import Credit from './Credit';

it('Credit is an svg', () => {
    const wrapper = shallow(<Credit />);
    expect(wrapper.type()).toEqual('svg');
});

it('Credit is 24x24', () => {
    const wrapper = shallow(<Credit />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
