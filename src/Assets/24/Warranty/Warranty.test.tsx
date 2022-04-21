import React from 'react';
import {shallow} from 'enzyme';
import Warranty from './Warranty';

it('Warranty is an svg', () => {
    const wrapper = shallow(<Warranty />);
    expect(wrapper.type()).toEqual('svg');
});

it('Warranty is 24x24', () => {
    const wrapper = shallow(<Warranty />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
