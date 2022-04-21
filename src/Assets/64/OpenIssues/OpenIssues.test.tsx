import React from 'react';
import {shallow} from 'enzyme';
import OpenIssues from './OpenIssues';

it('OpenIssues is an svg', () => {
    const wrapper = shallow(<OpenIssues />);
    expect(wrapper.type()).toEqual('svg');
});

it('OpenIssues is 64x64', () => {
    const wrapper = shallow(<OpenIssues />);
    expect(wrapper.prop('width')).toEqual('64');
    expect(wrapper.prop('height')).toEqual('64');
});
