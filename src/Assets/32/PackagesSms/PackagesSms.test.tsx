import React from 'react';
import {shallow} from 'enzyme';
import PackagesSms from './PackagesSms';

it('PackagesSms is an svg', () => {
    const wrapper = shallow(<PackagesSms />);
    expect(wrapper.type()).toEqual('svg');
});

it('PackagesSms is 32x32', () => {
    const wrapper = shallow(<PackagesSms />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
