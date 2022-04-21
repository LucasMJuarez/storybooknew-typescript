import React from 'react';
import {shallow} from 'enzyme';
import Bills from './Bills';

it('Bills is an svg', () => {
    const wrapper = shallow(<Bills />);
    expect(wrapper.type()).toEqual('svg');
});

it('Bills is 32x32', () => {
    const wrapper = shallow(<Bills />);
    expect(wrapper.prop('width')).toEqual('64');
    expect(wrapper.prop('height')).toEqual('64');
});
