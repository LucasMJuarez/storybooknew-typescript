import React from 'react';
import {shallow} from 'enzyme';
import AssetId from './Asset_Id';

it('NotificationOk is an svg', () => {
    const wrapper = shallow(<AssetId />);
    expect(wrapper.type()).toEqual('svg');
});

it('NotificationOk is 64x64', () => {
    const wrapper = shallow(<AssetId />);
    expect(wrapper.prop('width')).toEqual('80');
    expect(wrapper.prop('height')).toEqual('64');
});
