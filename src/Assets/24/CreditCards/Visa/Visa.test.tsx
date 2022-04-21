import React from 'react';
import {shallow} from 'enzyme';
import Visa from './Visa';

it('is an svg', () => {
    const wrapper = shallow(<Visa />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Visa />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
