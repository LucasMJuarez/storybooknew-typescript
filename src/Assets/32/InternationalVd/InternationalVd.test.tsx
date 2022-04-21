import React from 'react';
import {shallow} from 'enzyme';
import InternationalVd from './InternationalVd';

it('InternationalVd is an svg', () => {
    const wrapper = shallow(<InternationalVd />);
    expect(wrapper.type()).toEqual('svg');
});

it('InternationalVd is 32x32', () => {
    const wrapper = shallow(<InternationalVd />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
