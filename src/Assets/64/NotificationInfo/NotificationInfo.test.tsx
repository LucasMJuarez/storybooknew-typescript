import React from 'react';
import {shallow} from 'enzyme';
import NotificationInfo from './NotificationInfo';

it('NotificationInfo is an svg', () => {
    const wrapper = shallow(<NotificationInfo />);
    expect(wrapper.type()).toEqual('svg');
});

it('NotificationInfo is 64x64', () => {
    const wrapper = shallow(<NotificationInfo />);
    expect(wrapper.prop('width')).toEqual('64');
    expect(wrapper.prop('height')).toEqual('64');
});
