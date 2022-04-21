import React from 'react';
import {shallow} from 'enzyme';
import AlertInfo from './AlertInfo';

it('AlertInfo is an svg', () => {
    const wrapper = shallow(<AlertInfo />);
    expect(wrapper.type()).toEqual('svg');
});

it('AlertInfo is 24x24', () => {
    const wrapper = shallow(<AlertInfo />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
