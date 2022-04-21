import React from 'react';
import {shallow} from 'enzyme';
import PackagesMinutes from './PackagesMinutes';

it('PackagesMinutes is an svg', () => {
    const wrapper = shallow(<PackagesMinutes />);
    expect(wrapper.type()).toEqual('svg');
});

it('PackagesMinutes is 32x32', () => {
    const wrapper = shallow(<PackagesMinutes />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
