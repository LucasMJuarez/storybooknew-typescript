import React from 'react';
import {shallow} from 'enzyme';
import LayoutBad from './LayoutBad';

it('Component reder fine', () => {
    const wrapper = shallow(<LayoutBad />);
    expect(wrapper.type()).toEqual('svg');
});
it('LayoutBad is 24x24', () => {
    const wrapper = shallow(<LayoutBad />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
