import React from 'react';
import {shallow} from 'enzyme';
import Internet from './Internet';

it('Internet is an svg', () => {
    const wrapper = shallow(<Internet />);
    expect(wrapper.type()).toEqual('svg');
});

it('Internet is 32x32', () => {
    const wrapper = shallow(<Internet />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
