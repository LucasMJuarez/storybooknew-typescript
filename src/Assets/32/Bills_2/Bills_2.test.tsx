import React from 'react';
import {shallow} from 'enzyme';
import Bills_2 from './Bills_2';

it('Bills_2 is an svg', () => {
    const wrapper = shallow(<Bills_2 />);
    expect(wrapper.type()).toEqual('svg');
});

it('Bills_2 is 32x32', () => {
    const wrapper = shallow(<Bills_2 />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
