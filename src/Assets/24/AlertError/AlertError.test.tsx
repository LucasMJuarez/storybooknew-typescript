import React from 'react';
import {shallow} from 'enzyme';
import AlertError from './AlertError';

it('AlertError is an svg', () => {
    const wrapper = shallow(<AlertError />);
    expect(wrapper.type()).toEqual('svg');
});

it('AlertError is 24x24', () => {
    const wrapper = shallow(<AlertError />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
