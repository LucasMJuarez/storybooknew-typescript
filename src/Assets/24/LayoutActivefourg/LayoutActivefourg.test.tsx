import React from 'react';
import {shallow} from 'enzyme';
import LayoutActivefourg from './LayoutActivefourg';

it('Component reder fine', () => {
    const wrapper = shallow(<LayoutActivefourg />);
    expect(wrapper.type()).toEqual('svg');
});
