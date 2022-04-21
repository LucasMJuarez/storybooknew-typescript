import React from 'react';
import {shallow} from 'enzyme';
import TestDrive from './TestDrive';

it('TestDrive is an svg', () => {
    const wrapper = shallow(<TestDrive />);
    expect(wrapper.type()).toEqual('svg');
});

it('TestDrive is 24x24', () => {
    const wrapper = shallow(<TestDrive />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
