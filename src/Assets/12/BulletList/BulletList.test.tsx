import React from 'react';
import {shallow} from 'enzyme';
import BulletList from './BulletList';

it('is an svg', () => {
    const wrapper = shallow(<BulletList />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 12x12', () => {
    const wrapper = shallow(<BulletList />);
    expect(wrapper.prop('width')).toEqual('12px');
    expect(wrapper.prop('height')).toEqual('12px');
});
