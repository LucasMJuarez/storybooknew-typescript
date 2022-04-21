import React from 'react';
import {shallow} from 'enzyme';
import DeviceUpgrade from './DeviceUpgrade';

it('DeviceUpgrade is an svg', () => {
    const wrapper = shallow(<DeviceUpgrade />);
    expect(wrapper.type()).toEqual('svg');
});

it('DeviceUpgrade is 32x32', () => {
    const wrapper = shallow(<DeviceUpgrade />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
