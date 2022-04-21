import React from 'react';
import {shallow} from 'enzyme';
import GreyDown from './GreyDown';

it('Component render GreyDown', () => {
    const wrapper = shallow(<GreyDown />);
    expect(wrapper.type()).toEqual('svg');
});
it('DarkDown is 24x24', () => {
    const wrapper = shallow(<GreyDown />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('25');
});
