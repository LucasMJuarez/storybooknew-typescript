import React from 'react';
import {shallow} from 'enzyme';
import RadioOn from './RadioOn';

it('RadioOn is an svg', () => {
    const wrapper = shallow(<RadioOn />);
    expect(wrapper.type()).toEqual('svg');
});

it('RadioOn is 26x24', () => {
    const wrapper = shallow(<RadioOn />);
    expect(wrapper.prop('width')).toEqual('26');
    expect(wrapper.prop('height')).toEqual('24');
});
