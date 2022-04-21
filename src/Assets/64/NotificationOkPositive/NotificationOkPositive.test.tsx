import React from 'react';
import {shallow} from 'enzyme';
import NotificationOkPositive from './NotificationOkPositive';

it('NotificationOkPositive is an svg', () => {
    const wrapper = shallow(<NotificationOkPositive />);
    expect(wrapper.type()).toEqual('svg');
});

it('NotificationOkPositive is 64x64', () => {
    const wrapper = shallow(<NotificationOkPositive />);
    expect(wrapper.prop('width')).toEqual('64');
    expect(wrapper.prop('height')).toEqual('64');
});
