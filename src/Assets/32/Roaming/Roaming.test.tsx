import React from 'react';
import {shallow} from 'enzyme';
import Roaming from './Roaming';

it('Roaming is an svg', () => {
    const wrapper = shallow(<Roaming />);
    expect(wrapper.type()).toEqual('svg');
});

it('Roaming is 32x32', () => {
    const wrapper = shallow(<Roaming />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
