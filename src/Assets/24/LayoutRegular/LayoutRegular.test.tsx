import React from 'react';
import {shallow} from 'enzyme';
import LayoutRegular from './LayoutRegular';

it('LayoutRegular is an svg', () => {
    const wrapper = shallow(<LayoutRegular />);
    expect(wrapper.type()).toEqual('svg');
});

it('LayoutRegular is 24x24', () => {
    const wrapper = shallow(<LayoutRegular />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
