import React from 'react';
import {shallow} from 'enzyme';
import LightDown from './LightDown';

it('Component render LightDown', () => {
    const wrapper = shallow(<LightDown />);
    expect(wrapper.type()).toEqual('svg');
});
it('LightDown is 24x24', () => {
    const wrapper = shallow(<LightDown />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
