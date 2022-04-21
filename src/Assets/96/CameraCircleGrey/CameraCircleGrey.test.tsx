import React from 'react';
import {shallow} from 'enzyme';
import CameraCircleGrey from './CameraCircleGrey';

it('CameraCircleGrey is an svg', () => {
    const wrapper = shallow(<CameraCircleGrey />);
    expect(wrapper.type()).toEqual('svg');
});

it('CameraCircleGrey is 96x96', () => {
    const wrapper = shallow(<CameraCircleGrey />);
    expect(wrapper.prop('width')).toEqual('96');
    expect(wrapper.prop('height')).toEqual('96');
});
