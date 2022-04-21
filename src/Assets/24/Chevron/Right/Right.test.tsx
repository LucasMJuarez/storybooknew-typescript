import React from 'react';
import {shallow} from 'enzyme';
import Right from './Right';

it('Right is an svg', () => {
    const wrapper = shallow(<Right />);
    expect(wrapper.type()).toEqual('svg');
});

it('Right is 24x24', () => {
    const wrapper = shallow(<Right />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
