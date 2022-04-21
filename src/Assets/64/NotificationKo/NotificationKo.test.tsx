import React from 'react';
import {shallow} from 'enzyme';
import NotificationKo from './NotificationKo';

it('NotificationKo is an svg', () => {
    const wrapper = shallow(<NotificationKo />);
    expect(wrapper.type()).toEqual('svg');
});

it('NotificationKo is 64x64', () => {
    const wrapper = shallow(<NotificationKo />);
    expect(wrapper.prop('width')).toEqual('64');
    expect(wrapper.prop('height')).toEqual('64');
});
