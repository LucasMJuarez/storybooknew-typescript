import React from 'react';
import {shallow} from 'enzyme';
import LayoutInactivefourg from './LayoutInactivefourg';

it('Component reder fine', () => {
    const wrapper = shallow(<LayoutInactivefourg />);
    expect(wrapper.type()).toEqual('svg');
});
it('LayoutInactivefourg is 24x24', () => {
    const wrapper = shallow(<LayoutInactivefourg />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
