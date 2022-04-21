import React from 'react';
import {shallow} from 'enzyme';
import NotificationInfoInverse from './NotificationInfoInverse';

it('NotificationInfoInverse is an svg', () => {
    const wrapper = shallow(<NotificationInfoInverse />);
    expect(wrapper.type()).toEqual('svg');
});

it('NotificationInfoInverse is 64x64', () => {
    const wrapper = shallow(<NotificationInfoInverse />);
    expect(wrapper.prop('width')).toEqual('64');
    expect(wrapper.prop('height')).toEqual('64');
});
