import React from 'react';
import {shallow} from 'enzyme';
import DeviceConfiguration from './DeviceConfiguration';

it('DeviceConfiguration is an svg', () => {
    const wrapper = shallow(<DeviceConfiguration />);
    expect(wrapper.type()).toEqual('svg');
});

it('DeviceConfiguration is 24x24', () => {
    const wrapper = shallow(<DeviceConfiguration />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
