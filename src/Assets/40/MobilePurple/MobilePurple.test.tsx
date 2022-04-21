import React from 'react';
import {shallow} from 'enzyme';
import MobilePurple from './MobilePurple';

it('MobilePurple is an svg', () => {
    const wrapper = shallow(<MobilePurple />);
    expect(wrapper.type()).toEqual('svg');
});

it('MobilePurple is 24x24', () => {
    const wrapper = shallow(<MobilePurple />);
    expect(wrapper.prop('width')).toEqual('40');
    expect(wrapper.prop('height')).toEqual('40');
});
