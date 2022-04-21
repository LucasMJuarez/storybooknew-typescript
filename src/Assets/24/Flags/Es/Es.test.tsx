import React from 'react';
import {shallow} from 'enzyme';
import Es from './Es';

it('is an svg', () => {
    const wrapper = shallow(<Es />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Es />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
