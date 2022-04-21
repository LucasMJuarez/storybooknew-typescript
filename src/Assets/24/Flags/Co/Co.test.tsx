import React from 'react';
import {shallow} from 'enzyme';
import Co from './Co';

it('is an svg', () => {
    const wrapper = shallow(<Co />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Co />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
