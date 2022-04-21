import React from 'react';
import {shallow} from 'enzyme';
import Be from './Be';

it('is an svg', () => {
    const wrapper = shallow(<Be />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Be />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
