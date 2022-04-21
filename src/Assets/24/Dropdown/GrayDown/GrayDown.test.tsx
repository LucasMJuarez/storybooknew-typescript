import React from 'react';
import {shallow} from 'enzyme';
import GrayDown from './GrayDown';

it('Component render GrayDown', () => {
    const wrapper = shallow(<GrayDown />);
    expect(wrapper.type()).toEqual('svg');
});
it('GrayDown is 24x24', () => {
    const wrapper = shallow(<GrayDown />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
