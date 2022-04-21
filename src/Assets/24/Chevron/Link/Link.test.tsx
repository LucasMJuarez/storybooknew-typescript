import React from 'react';
import {shallow} from 'enzyme';
import Link from './Link';

it('Right is an svg', () => {
    const wrapper = shallow(<Link />);
    expect(wrapper.type()).toEqual('svg');
});

it('Right is 24x24', () => {
    const wrapper = shallow(<Link />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
