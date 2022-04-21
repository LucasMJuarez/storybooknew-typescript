import React from 'react';
import {shallow} from 'enzyme';
import NotificationInfo from './NotificationInfo';

it('NotificationInfo is an svg', () => {
    const wrapper = shallow(<NotificationInfo />);
    expect(wrapper.type()).toEqual('svg');
});
