import React from 'react';
import {shallow} from 'enzyme';
import Shop from './Shop';

it('Shop is an svg', () => {
    const wrapper = shallow(<Shop />);
    expect(wrapper.type()).toEqual('svg');
});

it('Shop is 24x24', () => {
    const wrapper = shallow(<Shop />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
