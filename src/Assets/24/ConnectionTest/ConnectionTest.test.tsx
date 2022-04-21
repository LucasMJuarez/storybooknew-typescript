import React from 'react';
import {shallow} from 'enzyme';
import ConnectionTest from './ConnectionTest';

it('ConnectionTest is an svg', () => {
    const wrapper = shallow(<ConnectionTest />);
    expect(wrapper.type()).toEqual('svg');
});

it('ConnectionTest is 24x24', () => {
    const wrapper = shallow(<ConnectionTest />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
