import React from 'react';
import {shallow} from 'enzyme';
import LayoutTariffs from './LayoutTariffs';

it('is an svg', () => {
    const wrapper = shallow(<LayoutTariffs />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<LayoutTariffs />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});