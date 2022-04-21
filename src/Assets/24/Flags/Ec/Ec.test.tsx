import React from 'react';
import {shallow} from 'enzyme';
import Ec from './Ec';

it('is an svg', () => {
    const wrapper = shallow(<Ec />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Ec />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
