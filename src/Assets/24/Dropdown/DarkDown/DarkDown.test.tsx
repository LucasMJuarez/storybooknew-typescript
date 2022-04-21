import React from 'react';
import {shallow} from 'enzyme';
import DarkDown from './DarkDown';

it('Component render DarkDown', () => {
    const wrapper = shallow(<DarkDown />);
    expect(wrapper.type()).toEqual('svg');
});
it('DarkDown is 24x24', () => {
    const wrapper = shallow(<DarkDown />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
