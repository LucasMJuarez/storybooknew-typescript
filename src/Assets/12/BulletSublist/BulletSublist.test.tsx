import React from 'react';
import {shallow} from 'enzyme';
import BulletSublist from './BulletSublist';

it('is an svg', () => {
    const wrapper = shallow(<BulletSublist />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 12x12', () => {
    const wrapper = shallow(<BulletSublist />);
    expect(wrapper.prop('width')).toEqual('12px');
    expect(wrapper.prop('height')).toEqual('12px');
});
