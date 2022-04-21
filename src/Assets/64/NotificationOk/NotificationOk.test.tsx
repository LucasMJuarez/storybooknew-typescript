import React from 'react';
import {shallow} from 'enzyme';
import NotificationOk from './NotificationOk';

it('NotificationOk is an svg', () => {
    const wrapper = shallow(<NotificationOk />);
    expect(wrapper.type()).toEqual('svg');
});

it('NotificationOk is 64x64', () => {
    const wrapper = shallow(<NotificationOk />);
    expect(wrapper.prop('width')).toEqual('64');
    expect(wrapper.prop('height')).toEqual('64');
});
