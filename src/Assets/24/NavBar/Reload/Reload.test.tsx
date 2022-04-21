import React from 'react';
import {shallow} from 'enzyme';
import Reload from './Reload';

it('Component reder fine', () => {
    const wrapper = shallow(<Reload />);
    expect(wrapper.type()).toEqual('svg');
});
it('Reload is 24x24', () => {
    const wrapper = shallow(<Reload />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
